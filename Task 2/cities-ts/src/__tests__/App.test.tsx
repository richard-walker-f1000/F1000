import React from "react";
import {
    render,
    screen,
    fireEvent,
    cleanup,
    within,
    waitFor,
    getByRole as globalGetByRole,
    getByText as globalGetByText,
    getByTestId as globalGetByTestId,
} from "@testing-library/react";
import Header from "../components/Header";
import SearchCities from "../pages/SearchCities";
import userEvent from "@testing-library/user-event";
import { debug } from "jest-preview";
beforeEach(() => {
    jest.resetAllMocks();
});

afterEach(() => {
    cleanup();
});

test("renders Header", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Search Cities/i);
    expect(linkElement).toBeInTheDocument();
});

test("check test for `an empty input`", async () => {
    render(<SearchCities />);

    // make sure autocomplete reactions/results do not already exist
    expect(screen.queryByText(/Hong Kong/)).toBeInTheDocument();
    const input = screen.getByTestId("cities-validation-textfield") as HTMLInputElement;
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "" } });
    expect(screen.queryByText(/Amsterdam/)).toBeInTheDocument();
    expect(screen.queryByText(/Beijing/)).toBeInTheDocument();
    expect(screen.queryByText(/Hong Kong/)).toBeInTheDocument();
    expect(screen.queryByText(/Melbourne/)).toBeInTheDocument();
});

test("check test for `All cities starting with name D, we should return Damascus, Delhi, Dubai & Dublin`", async () => {
    render(<SearchCities />);

    // make sure autocomplete reactions/results do not already exist
    expect(screen.queryByText(/Madrid/)).toBeInTheDocument();
    const input = screen.getByTestId("cities-validation-textfield") as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "MA" } });
    expect(screen.queryByText(/Madrid/)).toBeInTheDocument();
    expect(screen.queryByText(/Manila/)).toBeInTheDocument();
});

test("check scenario for `All cities starting with name MA, we should return Madrid & Manila`", async () => {
    render(<SearchCities />);

    // make sure autocomplete reactions/results do not already exist
    expect(screen.queryByText(/Damascus/)).toBeInTheDocument();
    const input = screen.getByTestId("cities-validation-textfield") as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "D" } });
    expect(screen.queryByText(/Damascus/)).toBeInTheDocument();
    expect(screen.queryByText(/Delhi/)).toBeInTheDocument();
    expect(screen.queryByText(/Dubai/)).toBeInTheDocument();
    expect(screen.queryByText(/Dublin/)).toBeInTheDocument();
});

test("check scenario for `All the cities with a name starting with N, we should return no results`", async () => {
    render(<SearchCities />);

    // make sure autocomplete reactions/results do not already exist
    expect(screen.queryByText(/Madrid/)).toBeInTheDocument();
    const input = screen.getByTestId("cities-validation-textfield") as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "N" } });
    expect(screen.queryByText(/No Cities found/i)).toBeInTheDocument();
});
