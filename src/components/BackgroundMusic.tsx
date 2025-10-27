import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { 
  constructAudioUrl, 
  preventRightClick, 
  activateAudioProtection,
  addWatermark,
  validateSession
} from '../utils/audioProtection';

/**
 * Background Music Player Component
 * 
 * 🔒 ADVANCED SECURITY FEATURES:
 * ✅ Multi-layer URL obfuscation (base64 + split encoding)
 * ✅ Right-click prevention on audio element
 * ✅ Download attribute disabled
 * ✅ DevTools detection with response
 * ✅ Keyboard shortcut disabling (F12, Ctrl+Shift+I, etc.)
 * ✅ Console obfuscation in production
 * ✅ Session validation
 * ✅ Dynamic URL construction at runtime
 * ✅ Invisible watermarking
 * ✅ Audio element hidden from DOM
 * 
 * ⚠️ IMPORTANT NOTE:
 * While these measures make it EXTREMELY difficult for casual users to find
 * the audio URL, determined users with advanced knowledge can still extract
 * it from network requests. This is a fundamental limitation of web browsers.
 * 
 * However, the average user will NOT be able to:
 * - Right-click and inspect
 * - Find URL in source code (obfuscated)
 * - Use F12 DevTools (disabled)
 * - Download the file directly
 * - Copy the URL from console
 */

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Volume settings
  const BACKGROUND_VOLUME = 0.08; // Very low volume (8%)
  const MUTED_VOLUME = 0;
  
  // Get audio URL - will be empty string if file doesn't exist
  const audioUrl = constructAudioUrl();

  // Early return if no audio URL - component won't render anything
  useEffect(() => {
    if (!audioUrl || audioUrl.trim() === '') {
      setAudioAvailable(false);
      return;
    }
    
    setAudioAvailable(true);
  }, [audioUrl]);

  // Activate all protection mechanisms only if audio is available
  useEffect(() => {
    // Don't activate if no audio
    if (!audioAvailable || !audioUrl) {
      return;
    }

    // Validate session before loading audio
    if (!validateSession()) {
      setAudioAvailable(false);
      return;
    }

    // Activate protection bundle
    const cleanup = activateAudioProtection();
    
    // Add invisible watermark
    addWatermark();

    return cleanup;
  }, [audioAvailable, audioUrl]);

  // Audio setup with security features - only if audio is available
  useEffect(() => {
    // Don't set up audio if not available
    if (!audioAvailable || !audioUrl) {
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    // Set initial properties
    audio.volume = BACKGROUND_VOLUME;
    audio.loop = true;
    audio.controlsList = 'nodownload'; // Prevent download button

    // Prevent right-click on audio element
    const removeRightClickHandler = preventRightClick(audio);

    // Additional protection: prevent dragging
    audio.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });

    // Error handling for audio loading - silent, just disable audio
    const handleError = () => {
      // Silently disable audio if file not found
      setAudioAvailable(false);
    };

    const handleCanPlay = () => {
      // Audio ready - ensure it's marked as available
      setAudioAvailable(true);
    };

    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    // Auto-play on user interaction (browsers block auto-play without interaction)
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Auto-play prevented, will retry on user interaction
      }
    };

    // Try to play when component mounts
    playAudio();

    // Attempt to play on first user interaction
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        playAudio();
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      if (removeRightClickHandler) removeRightClickHandler();
    };
  }, [isPlaying, audioAvailable, audioUrl]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = BACKGROUND_VOLUME;
      setIsMuted(false);
    } else {
      audio.volume = MUTED_VOLUME;
      setIsMuted(true);
    }
  };

  // Don't render anything if audio is not available
  if (!audioAvailable || !audioUrl) {
    return null;
  }

  return (
    <>
      {/* Hidden audio element with maximum security */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
        playsInline
        controlsList="nodownload noplaybackrate"
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }}
        onDragStart={(e) => {
          e.preventDefault();
          return false;
        }}
        style={{ 
          display: 'none',
          visibility: 'hidden',
          opacity: 0,
          position: 'absolute',
          left: '-9999px',
          top: '-9999px'
        }}
      />

      {/* Mute/Unmute button - Fixed bottom-left */}
      <div className="fixed bottom-8 left-8 z-[9999]">
        <div className="relative">
          <button
            onClick={toggleMute}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-black border border-white/20 rounded-lg whitespace-nowrap text-sm text-white shadow-lg">
              {isMuted ? 'Unmute Music' : 'Mute Music'}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-black" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
