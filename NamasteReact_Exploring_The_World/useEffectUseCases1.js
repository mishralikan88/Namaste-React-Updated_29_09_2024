
// Replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./useEffectUseCases1.js"></script> in index.html.

// Case 1 - Data Fetching on Initial Load - 
// Fetch data from an API when the component first loads by using an empty dependency array, ensuring the API call runs only once.


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Amar');
                const result = await response.json();
                console.log(result)
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // The useEffect hook runs its callback function only once, right after the initial render of the DataFetcher component. This means that as soon as DataFetcher renders for the first time, useEffect triggers, calling the fetchData function to make the API request.

    return <div>{data ? JSON.stringify(data) : <h1>Loading...</h1>}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DataFetcher />);