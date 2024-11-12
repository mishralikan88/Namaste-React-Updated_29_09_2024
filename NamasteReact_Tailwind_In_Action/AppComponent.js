import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import * as Footer from "./src/components/Footer"
import Body from "./src/components/Body"
import About from "./src/components/About"
import Error from "./src/components/Error"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurantMenu from "./src/components/RestaurantMenu"

import { lazy } from "react"
import Shimmer from "./src/components/Shimmer"
const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer.Footer1 />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "about",
                element: <About />
            },
            {
                path: "",
                element: <Body />
            },
            {
                path: "/restaurants/:resId", // The ":resId" segment in the path allows us to create a unique URL for each restaurant. This means that in the path "/restaurants/:resId," the ":resId" part is dynamic and can change based on the specific restaurant being accessed.
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>

            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)