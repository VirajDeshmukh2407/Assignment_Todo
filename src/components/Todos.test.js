import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Todos from "./Todos";

test("renders todos list", () => {
  render(
    <Provider store={store}>
      <Todos />
    </Provider>
  );
  // Assuming a default todo exists
  const todoElement = screen.getByText(/Hello/i);
  expect(todoElement).toBeInTheDocument();
});

test("removes a todo when delete button is clicked", () => {
  render(
    <Provider store={store}>
      <Todos />
    </Provider>
  );

  const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
  fireEvent.click(deleteButton);

  // Check that the todo is removed
  expect(screen.queryByText(/Hello/i)).toBeNull();
});
