import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import * as Footer from "./src/components/Footer"
import Body from "./src/components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Footer.Footer1 />
            <Footer.Footer2 /> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)