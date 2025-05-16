
// To run this file, replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./InlineCSS.js"></script> in index.html

import React from 'react';
import ReactDOM from "react-dom/client"

const InlineStyleExample = () => {

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    return (
        // Inline styling.
        <button style={buttonStyle}>
            Click Me
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<InlineStyleExample />)