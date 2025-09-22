import React from 'react';

const VapiWidget: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'transparent',
      }}
    >
      <iframe
        src="/vapi-widget.html"
        style={{
          width: '80px',
          height: '80px',
          border: 'none',
          backgroundColor: 'transparent',
          display: 'block',
          borderRadius: '12px',
        }}
        title="AI Assistant - Click to Chat"
        allow="microphone"
      />
    </div>
  );
};

export default VapiWidget;