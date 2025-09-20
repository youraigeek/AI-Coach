import React, { useEffect } from 'react';

declare global {
  interface Window {
    VapiWidget: any;
  }
}

const VapiWidget: React.FC = () => {
  useEffect(() => {
    const loadVapiWidget = () => {
      // Remove any existing widget
      const existingWidget = document.querySelector('vapi-widget');
      if (existingWidget) {
        existingWidget.remove();
      }

      // Create and append the widget
      const widget = document.createElement('vapi-widget');
      widget.setAttribute('assistant-id', '782931dc-51f9-4c96-9f99-a56f967264d2');
      widget.setAttribute('public-key', '45b82946-e45a-48e4-b450-a361346d45ed');
      
      // Add some inline styles to ensure visibility
      widget.style.position = 'fixed';
      widget.style.bottom = '20px';
      widget.style.right = '20px';
      widget.style.zIndex = '9999';
      
      document.body.appendChild(widget);
    };

    // Load the Vapi script if not already loaded
    const loadVapiScript = () => {
      const existingScript = document.querySelector('script[src*="vapi-ai"]');
      if (existingScript) {
        // Script already exists, just initialize widget
        setTimeout(loadVapiWidget, 1000);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.type = 'text/javascript';
      script.onload = () => {
        // Wait a bit for the script to fully initialize
        setTimeout(loadVapiWidget, 1000);
      };
      script.onerror = () => {
        console.error('Failed to load Vapi widget script');
      };
      
      document.head.appendChild(script);
    };

    // Initialize after component mounts
    const timer = setTimeout(loadVapiScript, 500);

    return () => {
      clearTimeout(timer);
      // Clean up widget on unmount
      const widget = document.querySelector('vapi-widget');
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible in React
};

export default VapiWidget;