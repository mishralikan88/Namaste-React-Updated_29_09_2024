// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./multipleUseEffectInOneComponent.js"></script> in index.html.


// Can we have multiple useEffects in a component ?
// Ans - Yes, you can have multiple useEffect hooks in a single component. Each useEffect can handle different side effects independently. 

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client"

function MyComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // useEffect 1

    useEffect(() => {
        console.log("Title useEffect")
        document.title = `Count: ${count}`;
    }, [count]);

    // useEffect 2

    useEffect(() => {
        console.log("Name useEffect")
        console.log(`Name changed to: ${name}`);
    }, [name]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<MyComponent />)

// Both useEffect hooks call their callbacks after the component's initial render. When we click the increment button, the first useEffect calls its callback. When we type something in the input field, the second useEffect calls its callback.