import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, setFilter } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
    return true;
  });

  return (
    <>
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => dispatch(setFilter("All"))}
          className={`border border-transparent rounded p-2 filter-btn ${
            filter === "All" ? "bg-indigo-500" : "bg-slate-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("Completed"))}
          className={` border border-transparent rounded p-2 filter-btn ${
            filter === "Completed" ? "bg-indigo-500 " : "bg-slate-600"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => dispatch(setFilter("Active"))}
          className={`border border-transparent rounded p-2 filter-btn ${
            filter === "Active" ? "bg-indigo-500" : "bg-slate-600"
          }`}
        >
          Active
        </button>
      </div>

      <ul className="list-none px-5 py-3">
        {filteredTodos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
            key={todo.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
              />
              <span
                className={`text-white ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </span>
            </div>
            <button
              aria-label="delete"
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 border-0 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L6 8M10 18L10 8M14 18L14 8M18 18L18 8M4 6L20 6M9 6L9 4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V6"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
