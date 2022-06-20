import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import Counter from "../pages/Counter";

test("renders Header", () => {
    render(<Header />);
    const linkElement = screen.getByText(/counter/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Counter page and check Counter value is 0", () => {
    render(<Counter />);
    // Check counter value is 0
    const counterText = screen.getByTestId("counter-value");
    expect(counterText).toHaveTextContent("0");
});

test("check Decrement button function", () => {
    render(<Counter />);
    const decrementCountButton = screen.getByRole("button", {
        name: "Decrement",
    });

    // click on decrement button
    fireEvent.click(decrementCountButton);
    const counterText = screen.getByTestId("counter-value");
    expect(counterText).toHaveTextContent("-1");
});

test("check Reset Counter button function", () => {
    render(<Counter />);
    const resetCountButton = screen.getByRole("button", {
        name: "Reset",
    });

    // click on reset button
    fireEvent.click(resetCountButton);
    const counterText = screen.getByTestId("counter-value");
    expect(counterText).toHaveTextContent("0");
});

test("check Increment button function", () => {
    render(<Counter />);
    const increamentCountButton = screen.getByRole("button", {
        name: "Increment",
    });

    // click on Increment button
    fireEvent.click(increamentCountButton);
    const counterText = screen.getByTestId("counter-value");
    expect(counterText).toHaveTextContent("1");
});

test("execute all buttons functions", () => {
    render(<Counter />);
    const decrementCountButton = screen.getByRole("button", {
        name: "Decrement",
    });

    const resetCountButton = screen.getByRole("button", {
        name: "Reset",
    });

    const increamentCountButton = screen.getByRole("button", {
        name: "Increment",
    });

    fireEvent.click(decrementCountButton); // counter value is -1
    fireEvent.click(decrementCountButton); // counter value is -2
    fireEvent.click(resetCountButton); // counter value is 0
    fireEvent.click(increamentCountButton); // counter value is 1
    fireEvent.click(decrementCountButton); // counter value is 0
    fireEvent.click(increamentCountButton); // counter value is 1
    fireEvent.click(increamentCountButton); // counter value is 2
    fireEvent.click(increamentCountButton); // counter value is 3

    const counterText = screen.getByTestId("counter-value");
    expect(counterText).toHaveTextContent("3");
});
