import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";

class TodoListView extends Component {
  render() {
    const {
      todoList,
      todoCheckControll,
      todoDone,
      todoModifyList,
      todoDeleteList,
    } = this.props;

    return (
      <div className="todo-list">
        {todoList.map((value, index) => (
          <ListItem key={index} index={index} className="todo-list-row">
            <Checkbox onClick={() => todoCheckControll(index)} />
            <ListItemText className={todoDone ? "done" : ""}>
              {value}
            </ListItemText>
            <ThreeSixtyIcon onClick={() => todoModifyList(index)} />
            <DeleteIcon onClick={() => todoDeleteList(index)} />
          </ListItem>
        ))}
      </div>
    );
  }
}

export default TodoListView;
