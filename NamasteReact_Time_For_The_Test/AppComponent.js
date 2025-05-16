import React, { Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About"
import Error from "./src/components/Error"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurantMenu from "./src/components/RestaurantMenu"
import userContext from "./src/utils/UserContext"
import { lazy } from "react"
import Shimmer from "./src/components/Shimmer"
import Cart from "./src/components/Cart"

import { Provider } from "react-redux"
import appStore from "./src/utils/appStore"

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(() => {
        // API call
        const data = {
            name: "Amarnath Mishra"
        }
        setUserName(data.name)
    }, [])

    return (
        <div className="app">
            <Provider store={appStore}>
                <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                </userContext.Provider>
            </Provider>
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
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>

            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)