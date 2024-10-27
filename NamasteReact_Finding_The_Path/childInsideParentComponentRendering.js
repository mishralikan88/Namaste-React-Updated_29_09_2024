{/* 
The script file in index.html should be: <script type="module" src="./childInsideParentComponentRendering.js"></script> 
*/}


import React, { useState } from 'react';
import ReactDOM from "react-dom/client"

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // Inefficient: `ChildComponent` is recreated each time `ParentComponent` renders. 
    // `ParentComponent` renders once when it initially loads and re-renders every time the `count` value is updated by a button click.

    const ChildComponent = () => {
        console.log('ChildComponent is recreated on every render');
        return <p>This is the child component</p>;
    };


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <ChildComponent />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ParentComponent />)
