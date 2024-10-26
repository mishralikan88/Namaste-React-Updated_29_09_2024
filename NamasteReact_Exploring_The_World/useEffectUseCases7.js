// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases7.js"></script> in index.html.

// case 7 - Managing State with Side Effects
// Show a success message when a certain condition (like isSuccess becoming true) changes, by adding it as a dependency.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function SuccessNotifier() {
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        console.log("render")
        if (isSuccess) alert('Operation was successful!');
    }, [isSuccess]);

    // The useEffect callback runs after the initial component render and during the next re-render, which occurs when the button is clicked. This happens because clicking the button changes the isSuccess state, triggering reconciliation. During the next render phase, the alert is invoked.

    return (
        <button onClick={() => setIsSuccess(true)}>
            Complete Operation
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SuccessNotifier />);