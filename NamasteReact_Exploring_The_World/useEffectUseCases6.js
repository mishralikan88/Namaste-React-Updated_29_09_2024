// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases6.js"></script> in index.html.

// case 6 - Form Validation
// Use useEffect to validate form input and trigger revalidation only when the specific input field changes.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function FormValidator() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }, [email]); // Runs whenever 'email' changes.

    return (
        <div>
            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p>{isValid ? 'Valid email' : 'Invalid email'}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormValidator />);

//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)  returns true if email is valid. (a@a.com)
//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) returns false if email is invalid. 