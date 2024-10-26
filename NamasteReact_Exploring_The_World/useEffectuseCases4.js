// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases4.js"></script> in index.html.

// case 4 - Timer or Interval Management
// Set a timer inside useEffect, and clear it when the component unmounts or dependencies change.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function TimerExample() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { // Setting up an interval to run every second
            setTime(time + 1); // Updating 'time' by adding 1 to its current value
        }, 1000);

        return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
    }, [time]); // Dependency array containing 'time', causing useEffect to rerun on every 'time' update

    return <div>Timer: {time} seconds</div>; // Rendering the current timer value
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TimerExample />); 