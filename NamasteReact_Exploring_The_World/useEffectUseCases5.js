// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases5.js"></script> in index.html.

// case 5 - Saving to Local Storage
// Save a component’s data to local storage when it changes, and retrieve it when the component loads.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function LocalStorageSaver() {
    const [value, setValue] = useState(() => JSON.parse(localStorage.getItem('myKey')) || '');

    useEffect(() => {
        localStorage.setItem('myKey', JSON.stringify(value));
    }, [value]);

    // The callback will be called after the LocalStorageSaver component renders for the first time and after every subsequent value change. Initially, the value is an empty string (""), which represents the stored string in local storage that you can check in the developer tools. Changing the text in the search box triggers reconciliation due to the setValue call, which updates the state. This, in turn, calls the function inside useEffect, updating the local storage data.

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LocalStorageSaver />);