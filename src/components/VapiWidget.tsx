import React from 'react';

const VapiWidget: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'white',
        border: '1px solid rgba(0, 0, 0, 0.1)',
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
        }}
        title="AI Assistant - Click to Chat"
        allow="microphone"
      />
    </div>
  );
};

export default VapiWidget;