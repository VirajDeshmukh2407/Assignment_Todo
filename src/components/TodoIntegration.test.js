import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

test("adds and displays a new todo", () => {
  render(
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Add a Todo.../i);
  const buttonElement = screen.getByText(/Add Todo/i);

  fireEvent.change(inputElement, {
    target: { value: "New Integration Test Todo" },
  });
  fireEvent.click(buttonElement);

  // Verify that the new todo appears in the Todos list
  expect(screen.getByText(/New Integration Test Todo/i)).toBeInTheDocument();
});
