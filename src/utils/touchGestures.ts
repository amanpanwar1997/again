import { useState, useEffect, useCallback } from 'react';

interface TouchPosition {
  x: number;
  y: number;
  time: number;
}

interface SwipeGestureCallbacks {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

interface SwipeGestureOptions {
  threshold?: number; // minimum distance for swipe (px)
  timeout?: number; // maximum time for swipe (ms)
  velocity?: number; // minimum velocity for swipe (px/ms)
}

/**
 * Hook for detecting swipe gestures on touch devices
 * @param callbacks - Object with swipe direction callbacks
 * @param options - Configuration options for swipe detection
 */
export const useSwipeGesture = (
  callbacks: SwipeGestureCallbacks,
  options: SwipeGestureOptions = {}
) => {
  const {
    threshold = 50,
    timeout = 300,
    velocity = 0.3
  } = options;

  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null);
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const xDiff = touchStart.x - touchEnd.x;
    const yDiff = touchStart.y - touchEnd.y;
    const timeDiff = touchEnd.time - touchStart.time;

    // Check if swipe is within timeout
    if (timeDiff > timeout) return;

    // Calculate velocity
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    const swipeVelocity = distance / timeDiff;

    // Check if velocity meets threshold
    if (swipeVelocity < velocity) return;

    // Determine swipe direction (horizontal vs vertical)
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Horizontal swipe
      if (Math.abs(xDiff) > threshold) {
        if (xDiff > 0) {
          callbacks.onSwipeLeft?.();
        } else {
          callbacks.onSwipeRight?.();
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(yDiff) > threshold) {
        if (yDiff > 0) {
          callbacks.onSwipeUp?.();
        } else {
          callbacks.onSwipeDown?.();
        }
      }
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, threshold, timeout, velocity, callbacks]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};

/**
 * Hook for long press gesture detection
 * @param onLongPress - Callback for long press
 * @param duration - Duration in ms to trigger long press (default: 500ms)
 */
export const useLongPress = (
  onLongPress: () => void,
  duration: number = 500
) => {
  const [pressing, setPressing] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleStart = useCallback(() => {
    setPressing(true);
    const id = setTimeout(() => {
      onLongPress();
      setPressing(false);
    }, duration);
    setTimeoutId(id);
  }, [onLongPress, duration]);

  const handleEnd = useCallback(() => {
    setPressing(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return {
    onTouchStart: handleStart,
    onTouchEnd: handleEnd,
    onMouseDown: handleStart,
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd,
    pressing
  };
};

/**
 * Trigger haptic feedback (vibration) if supported
 * @param duration - Vibration duration in ms (default: 10ms)
 */
export const triggerHapticFeedback = (duration: number = 10) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(duration);
  }
};

/**
 * Trigger haptic feedback pattern
 * @param pattern - Array of vibration durations [vibrate, pause, vibrate, ...]
 */
export const triggerHapticPattern = (pattern: number[]) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
};
