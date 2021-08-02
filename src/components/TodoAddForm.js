import React, { Component } from "react";
import TodoListView from "./TodoListView";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TodoAddForm extends Component {
  state = {
    todoList: [],
  };

  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    });
  }

  inputTextBring = (e) => {
    e.preventDefault();
    // console.log(e.target.todoText.value);
    const {
      todoText: { value },
    } = e.target;
    this.setState(
      (state) => ({
        todoList: [...state.todoList, value],
      }),
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
      }
    );
    // console.log(value);
    e.target.todoText.value = "";
  };

  stateList = () => {
    console.log(this.state.todoList);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.inputTextBring}>
          <TextField name="todoText" label="할 일" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btnPos"
          >
            Confirm
          </Button>
        </form>
        <TodoListView todoList={this.state.todoList} />
      </div>
    );
  }
}

export default TodoAddForm;
