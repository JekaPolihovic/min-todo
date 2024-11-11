import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import TodoList from "../src/components/TodoList";

describe("<TodoList />", () => {
  it("does not render any list items when the button is not clicked", () => {
    render(<TodoList />);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("does not display any list items after clearing completed tasks", () => {
    render(<TodoList />);

    const clearCompletedBtn = screen.getByText(/clear completed/i);
    userEvent.click(clearCompletedBtn);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("displays list items when the button is clicked after entering text", () => {
    const newTask = "new todo";

    render(<TodoList />);

    const inputField = screen.getByPlaceholderText("What needs to be done?");
    const btnSubmit = screen.getByTestId("submit");

    userEvent.type(inputField, newTask);
    userEvent.click(btnSubmit);
    expect(screen.queryByText(newTask)).toBeDefined();
  });
});
