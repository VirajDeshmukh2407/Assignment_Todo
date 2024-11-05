import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div className="">
      <Header />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
