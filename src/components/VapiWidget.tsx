import React, { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    Vapi: any;
  }
}

const VapiWidget: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    // Load Vapi SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vapi-aiweb/latest/dist/index.js';
    script.type = 'module';
    
    script.onload = () => {
      try {
        // Initialize Vapi with your credentials
        vapiRef.current = new window.Vapi('45b82946-e45a-48e4-b450-a361346d45ed');
        
        // Set up event listeners
        vapiRef.current.on('call-start', () => {
          console.log('Call started');
          setIsCallActive(true);
        });

        vapiRef.current.on('call-end', () => {
          console.log('Call ended');
          setIsCallActive(false);
        });

        vapiRef.current.on('error', (error: any) => {
          console.error('Vapi error:', error);
          setIsCallActive(false);
        });

        console.log('Vapi initialized successfully');
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize Vapi:', error);
        setIsLoading(false);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Vapi SDK');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (error) {
          console.error('Error stopping Vapi:', error);
        }
      }
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (!vapiRef.current || isLoading) {
      console.error('Vapi not initialized');
      return;
    }

    try {
      if (isCallActive) {
        // End the call
        vapiRef.current.stop();
      } else {
        // Start a call with your assistant
        vapiRef.current.start('782931dc-51f9-4c96-9f99-a56f967264d2');
      }
    } catch (error) {
      console.error('Error toggling call:', error);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #6A0DAD 0%, #8B1EDB 100%)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(106, 13, 173, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
      }}
    >
      {/* Pulse animation */}
      <div
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          animation: 'pulse 2s infinite',
          pointerEvents: 'none',
        }}
      />
      
      <button
        style={{
          width: '32px',
          height: '32px',
          background: isCallActive ? '#ff4444' : 'white',
          color: isCallActive ? 'white' : '#6A0DAD',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        disabled={isLoading}
      >
        {isLoading ? '...' : isCallActive ? '⏹' : 'AI'}
      </button>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default VapiWidget;