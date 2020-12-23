import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoForm from "./TodoFrom";
import Todos from "./Todos";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Write a Todo List.",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Play soccer.",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Play Game.",
      isCompleted: false,
    },
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo }]);
  };
  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="parent-container">
      <div className="container top-container">
        <div className="app">
          <div className="todoform">
            <TodoForm addTodo={addTodo} />
            <Todos todos={todos} markComplete={markComplete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
