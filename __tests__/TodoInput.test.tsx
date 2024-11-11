import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TodoInput from "../src/components/TodoList/TodoInput";
import { TodoContext } from "../src/store";

const mockDispatch = jest.fn();

describe("<TodoInput />", () => {
    beforeEach(() => {
        render(
            <TodoContext.Provider value={{ dispatch: mockDispatch }}>
                <TodoInput />
            </TodoContext.Provider>
        );
    });

    it("renders input field and submit button", () => {
        const inputField = screen.getByPlaceholderText("What needs to be done?");
        const submitButton = screen.getByTestId("submit");

        expect(inputField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it("does not dispatch ADD_TODO action for empty todo", () => {
        const inputField = screen.getByPlaceholderText("What needs to be done?");
        const submitButton = screen.getByTestId("submit");

        userEvent.type(inputField, " ");
        userEvent.click(submitButton);

        expect(mockDispatch).not.toHaveBeenCalled();
    });

    it("does not dispatch ADD_TODO action for a numeric todo", () => {
        const inputField = screen.getByPlaceholderText("What needs to be done?");
        const submitButton = screen.getByTestId("submit");

        userEvent.type(inputField, "12345");
        userEvent.click(submitButton);

        expect(mockDispatch).not.toHaveBeenCalled();
    });

    it("clears the input field after submitting a todo", () => {
        const newTask = "Finish the project";

        const inputField = screen.getByPlaceholderText("What needs to be done?");
        const submitButton = screen.getByTestId("submit");

        userEvent.type(inputField, newTask);
        userEvent.click(submitButton);

        expect(inputField).toHaveValue("");
    });
});
