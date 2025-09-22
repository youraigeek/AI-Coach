import React from 'react';

const VapiWidget: React.FC = () => {
  return (
    <iframe
      src="/vapi-widget.html"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        border: 'none',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        zIndex: 999999,
      }}
      title="Vapi AI Assistant"
      allow="microphone"
    />
  );
};

export default VapiWidget;