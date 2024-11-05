import todoReducer, { addTodo, removeTodo } from "./todoSlice";

test("should return the initial state", () => {
  expect(todoReducer(undefined, {})).toEqual({
    todos: [{ id: 1, text: "Hello" }],
  });
});

test("should handle adding a todo", () => {
  const previousState = { todos: [] };
  const action = addTodo("Test Todo");
  const newState = todoReducer(previousState, action);

  expect(newState.todos.length).toBe(1);
  expect(newState.todos[0].text).toBe("Test Todo");
});

test("should handle removing a todo", () => {
  const previousState = {
    todos: [{ id: 1, text: "Test Todo" }],
  };
  const action = removeTodo(1);
  const newState = todoReducer(previousState, action);

  expect(newState.todos.length).toBe(0);
});
