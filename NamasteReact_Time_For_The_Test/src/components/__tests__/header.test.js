import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom";


it("should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )
    const logInButton = screen.getByRole("button", { name: "Login" })
    expect(logInButton).toBeInTheDocument()
})

it("should load header component with Cart-0 items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument()
})

it("should change Log in button to log out on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const logInButton = screen.getByRole("button", { name: "Login" })
    fireEvent.click(logInButton)
    const logOutButton = screen.getByRole("button", { name: "Logout" });
    expect(logOutButton).toBeInTheDocument()
})

it("should change Log in button to log out on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const logInButton = screen.getByRole("button", { name: "Login" })

    fireEvent.click(logInButton)
    const logOutButton = screen.getByRole("button", { name: "Logout" });
    expect(logOutButton).toBeInTheDocument()

    fireEvent.click(logOutButton)
    expect(logInButton).toBeInTheDocument()
    
})