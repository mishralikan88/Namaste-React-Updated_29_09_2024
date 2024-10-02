import React from "react"
import ReactDOM from "react-dom/client"

// creating heading using pure react
const heading1 = React.createElement("h1", { id: "heading" }, "Namaste React")

// creating heading using JSX
const heading2 = <h1 id="heading">Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading2)