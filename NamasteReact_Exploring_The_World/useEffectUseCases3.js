// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases3.js"></script> in index.html.

// case 3 - Updating the Document Title
// Update the document title based on a component’s state or prop values, and re-run only when that specific state changes.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function TitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // The useEffect hook will run after the initial component render and then again on each subsequent re-render whenever the count state variable changes.


    return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleUpdater />);