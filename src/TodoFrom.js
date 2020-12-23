import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <div className="container">
      <div className="app-title text-center">ToDo App</div>
      <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
        <input
          className={"form-control col-md-8 "}
          type={"text"}
          placeholder={"Add a ToDo"}
          value={value}
          onChange={handleChange}
        />
        <input
          className={"form-control btn-primary col-md-4 submit-button"}
          type={"submit"}
          value={"Add"}
        />
      </form>
    </div>
  );
};
export default TodoForm;
