import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us Component test cases", () => {
    test("should load contact us component", () => {
        render(<Contact />);
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
        console.log(inputelements)
        expect(inputelements.length).toBe(2)
    })
})

