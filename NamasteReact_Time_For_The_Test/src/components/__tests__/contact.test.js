import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Component test cases", () => {
    beforeAll(() => {
        console.log("Executed before all test cases.")
    });
    beforeEach(() => {
        console.log("Executed before each test case.")
    });
    afterAll(() => {
        console.log("Executed after all test cases.")
    });
    afterEach(() => {
        console.log("Executed after each test case.")
    });

    test("should load contact us component", () => {
        render(<Contact />);
        screen.debug(); // 🔍 Outputs the rendered DOM in your test terminal
        // screen.logTestingPlaygroundURL(); // 🌐 Gives a browser-based playground URL
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
    })

    test("should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
    })

    test("should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument()
    })

    test("should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByText(/submit/i);
        expect(button).toBeInTheDocument()
    })

    test("should load input text with placeholder name", () => {
        render(<Contact />)
        const inputByPlaceHolder = screen.getByPlaceholderText("name")
        expect(inputByPlaceHolder).toBeInTheDocument()
    })

    test("should load 2  input text elements inside contact us component", () => {
        render(<Contact />)
        const inputelements = screen.getAllByRole("textbox")
        expect(inputelements.length).toBe(2)
    })
})

