import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': {
        'assistant-id': string;
        'public-key': string;
        mode: string;
        microphonePermissionPrompt: string;
        style?: React.CSSProperties;
      };
    }
  }
}

const VapiWidget: React.FC = () => {
  return (
    <vapi-widget
      assistant-id="782931dc-51f9-4c96-9f99-a56f967264d2"
      public-key="45b82946-e45a-48e4-b450-a361346d45ed"
      mode="both"
      microphonePermissionPrompt="true"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999,
      }}
    />
  );
};

export default VapiWidget;