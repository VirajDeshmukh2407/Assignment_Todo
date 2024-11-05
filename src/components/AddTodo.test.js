import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import AddTodo from "./AddTodo";

test("renders AddTodo input and button", () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Add a Todo.../i);
  const buttonElement = screen.getByText(/Add Todo/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls addTodo when input is filled and form is submitted", () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Add a Todo.../i);
  const buttonElement = screen.getByText(/Add Todo/i);

  // Simulate user input
  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  // Assert that input is cleared after submission
  expect(inputElement.value).toBe("");
});
