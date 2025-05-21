import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Body from "../Body";
import resListMockData from "../mocks/resListMockData.json"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(resListMockData)
    });
});

it("Should render the Body component in the JS DOM", async () => {

    // Render the <Body /> component inside the JS DOM.
    // The Body component uses useEffect to make an asynchronous fetch call to get restaurant data.
    // Since fetching data is async, we need to wait for the dynamic content to load before testing it.
    // We use 'await' with screen.findAllByTestId to wait until the restaurant cards are rendered in the DOM.
    // This ensures that the test only proceeds after the API data has been fetched and displayed,preventing errors that would occur if we tried to access elements before they exist.

    // Rendering the Body component in the JS DOM.

    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );

});

// BrowserRouter wraps the component in routing context so React Router features (like links or hooks) work correctly during testing.


it("Should render the Body component in the JS DOM with search functionality.", async () => {

    // Rendering the Body component in the JS DOM.
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );

    // Wait for the initial 20 restaurant cards to be rendered after the fetch completes
    const initialCards = await screen.findAllByTestId("resCard");
    expect(initialCards.length).toBe(20);

    // Verify that the Search button is present in the DOM
    const searchButton = screen.getByRole("button", { name: "Search" })
    expect(searchButton).toBeInTheDocument()

    // Verify that the search input box is present in the DOM
    const searchInput = screen.getByTestId("searchInput")
    expect(searchInput).toBeInTheDocument()

    // Simulate typing "Pizza Hut" into the search input box
    fireEvent.change(searchInput, { target: { value: "Pizza Hut" } })

    // Simulate clicking the Search button to trigger the filtering action
    fireEvent.click(searchButton)

    // Wait for the filtered restaurant cards to be rendered
    // Expect only one restaurant card with the name "Pizza Hut" to be displayed 
    const filteredRestaurantsCount = await screen.findAllByTestId("resCard");

    expect(filteredRestaurantsCount.length).toBe(1)

});
