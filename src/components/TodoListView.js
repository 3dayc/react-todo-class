import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListView = ({ todoList }) => (
  <div className="todo-list">
    {todoList.map((value, index) => (
      <ListItem key={index} className="todo-list-row">
        <Checkbox />
        <ListItemText>{value}</ListItemText>
        <DeleteIcon />
      </ListItem>
    ))}
  </div>
);

export default TodoListView;
