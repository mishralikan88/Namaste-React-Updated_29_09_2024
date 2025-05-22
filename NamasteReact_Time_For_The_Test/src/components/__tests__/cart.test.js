import mockResMenuData from "../mocks/mockResMenu.json"
import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockResMenuData)
    })
})

it("should load Restaurant Menu Component", async () => {
    render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>);
})

it("When the first accordion header is clicked, 15 food items should be displayed.", async () => {

    render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>);

    const firstAccordionHeader = await screen.findByText("Recommended(15)");
    fireEvent.click(firstAccordionHeader);

    const firstAccordionFoodItems = await screen.findAllByTestId("foodItems");
    expect(firstAccordionFoodItems.length).toBe(15);
});


it("When Cart - (2 items) in header is clicked, Cart component should render 2 item cards in addition to the 15 menu items", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </>
            </Provider>
        </BrowserRouter>
    );

    const firstAccordionHeader = await screen.findByText("Recommended(15)");
    fireEvent.click(firstAccordionHeader);

    const addBtns = await screen.findAllByRole("button", { name: "Add +" });

    // When we click on the first food item inside the first accordion, the cart should update from "Cart - (0 items)" to "Cart - (1 items)" in the Header component.

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    // When we click on the second food item inside the first accordion, the cart should update from "Cart - (1 items)" to "Cart - (2 items)" in the Header component.

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    // When Cart - (2 items) in header is clicked, Cart component should render 2 item cards in addition to the 15 menu items"
    expect(screen.getAllByTestId("foodItems").length).toBe(17)

    // Simulating a click on the "Clear Cart" button

    fireEvent.click(screen.getByRole("button", { name: "clear cart" }))

    // Expecting the 2 cart food items to be removed, so the total ItemList components should reduce from 17 to 15.

    expect(screen.getAllByTestId("foodItems").length).toBe(15)

    expect(screen.getByText("Cart is empty.Add items to the cart")).toBeInTheDocument()
});