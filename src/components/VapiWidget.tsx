import React from 'react';

const VapiWidget: React.FC = () => {
  return (
    <iframe
      src="/vapi-widget.html"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '80px',
        height: '80px',
        border: 'none',
        background: 'transparent',
        zIndex: 999999,
        pointerEvents: 'auto',
      }}
      title="Vapi Voice Assistant"
      allow="microphone"
    />
  );
};

export default VapiWidget;