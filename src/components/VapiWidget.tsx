import React, { useEffect, useRef } from 'react';

const VapiWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadVapiWidget = async () => {
      try {
        // Remove any existing widgets first
        const existingWidgets = document.querySelectorAll('vapi-widget');
        existingWidgets.forEach(widget => widget.remove());

        // Load the script if not already loaded
        if (!scriptLoadedRef.current) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
          script.type = 'text/javascript';
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
          
          scriptLoadedRef.current = true;
          
          // Wait a bit more for the script to fully initialize
          await new Promise(resolve => setTimeout(resolve, 2000));
        }

        // Create the widget element
        const widget = document.createElement('vapi-widget');
        widget.setAttribute('assistant-id', '782931dc-51f9-4c96-9f99-a56f967264d2');
        widget.setAttribute('public-key', '45b82946-e45a-48e4-b450-a361346d45ed');
        
        // Apply styles to ensure visibility
        widget.style.cssText = `
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 999999 !important;
          width: auto !important;
          height: auto !important;
          min-width: 60px !important;
          min-height: 60px !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          background-color: white !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        `;
        
        // Append to body
        document.body.appendChild(widget);
        
        console.log('Vapi widget created and appended to body');
        
        // Force a reflow to ensure the widget is rendered
        widget.offsetHeight;
        
      } catch (error) {
        console.error('Error loading Vapi widget:', error);
        
        // Fallback: Create a simple chat button that opens Vapi
        const fallbackButton = document.createElement('div');
        fallbackButton.innerHTML = `
          <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: white;
            border: 2px solid #6A0DAD;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 999999;
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#6A0DAD">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </div>
        `;
        
        fallbackButton.onclick = () => {
          alert('Voice assistant is loading... Please try again in a moment.');
        };
        
        document.body.appendChild(fallbackButton);
      }
    };

    // Load widget after a short delay to ensure DOM is ready
    const timer = setTimeout(loadVapiWidget, 1000);

    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      const widgets = document.querySelectorAll('vapi-widget');
      widgets.forEach(widget => widget.remove());
    };
  }, []);

  return (
    <div ref={widgetRef} style={{ display: 'none' }}>
      {/* This div is just for React component structure */}
    </div>
  );
};

export default VapiWidget;