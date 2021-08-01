import React from "react";

const TodoListView = ({ todoList }) => (
  <div className="todo-list">
    {todoList.map((value) => (
      <div className="todo-list-row">{value}</div>
    ))}
  </div>
);

export default TodoListView;
