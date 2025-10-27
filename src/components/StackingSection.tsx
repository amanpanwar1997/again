interface StackingSectionProps {
  index: number;
  total: number;
  children?: React.ReactNode;
  showVideo?: boolean;
}

export default function StackingSection({ index, total, children, showVideo = false }: StackingSectionProps) {
  return (
    <div
      className="sticky bg-black text-white overflow-hidden"
      style={{
        top: '0',
        height: '100vh',
        width: '100%',
        maxWidth: '100vw',
        borderRadius: '20px',
        zIndex: (index + 1) * 3,
        boxSizing: 'border-box',
        border: '1px solid rgba(128, 128, 128, 0.3)',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Video Background - Only shown when showVideo prop is true */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="https://inchtomilez.com/wp-content/uploads/2024/09/Sequence-01_2.mp4#t=9" type="video/mp4" />
        </video>
      )}
      
      {/* Content Layer - appears above video with scrolling support */}
      <div 
        className="overflow-y-auto overflow-x-hidden"
        style={{ 
          position: 'relative', 
          zIndex: 2,
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
        }}
      >
        {children || (
          <div className="text-center flex items-center justify-center h-full">
            <div>
              <h2>Section {index + 1}</h2>
              <p className="mt-2 text-gray-400">Scroll to see the stacking effect</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
