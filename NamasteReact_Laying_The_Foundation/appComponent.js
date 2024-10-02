import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => <h1>Namaste React using JSX</h1>

const JSXElement = <h1>I am a JSX element</h1>

const data = api.getData(); // Assume this fetches data from an API, which could potentially include malicious content.

const HeadingComponent = () => (
    <div>
        {data}            {/* JSX automatically sanitizes any malicious data to prevent XSS attacks. */}
        {JSXElement}      {/* Using JSX directly within the functional component. */}
        <Title></Title>   {/* Component composition: rendering the Title component. */}
        {Title()}         {/* Calling the Title function directly, which returns JSX. */}
        <h1>Namaste React functional component</h1> {/* A standard JSX element. */}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(HeadingComponent()) // function call
root.render(<HeadingComponent />)  // self closing tag