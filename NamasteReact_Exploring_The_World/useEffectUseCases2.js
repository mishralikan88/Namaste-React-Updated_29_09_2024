// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases2.js"></script> in index.html.

// case 2 - Subscribing to Events (e.g., Window Resize)
// Set up an event listener that logs the window’s width whenever it resizes, and clean up the listener when the component unmounts.

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


function WindowResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return <div>Window width: {width}px</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WindowResizeListener />);