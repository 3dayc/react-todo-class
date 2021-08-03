import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListView = ({ todoList, todoDeleteList }) => (
  <div className="todo-list">
    {todoList.map((value, index) => (
      <ListItem key={index} index={index} className="todo-list-row">
        <Checkbox />
        <ListItemText>{value}</ListItemText>
        <DeleteIcon onClick={() => todoDeleteList(index)} />
      </ListItem>
    ))}
  </div>
);

export default TodoListView;
