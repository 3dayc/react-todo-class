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
    const {
      todoText: { value },
    } = e.target;
    if (value !== "" && !value.match(/\s/g)) {
      this.setState(
        (state) => ({
          todoList: [...state.todoList, value],
        }),
        () => {
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        }
      );
      e.target.todoText.value = "";
    } else {
      alert("할 일을 입렵하세요.");
      e.target.todoText.value = "";
      e.target.todoText.focus();
    }
  };

  stateList = () => {
    console.log(this.state.todoList);
  };

  todoDeleteList = (index) => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
      this.setState(
        (state) => ({
          todoList: [
            ...state.todoList.slice(0, index),
            ...state.todoList.slice(index + 1),
          ],
        }),
        () =>
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      );
    }
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
        <TodoListView
          todoList={this.state.todoList}
          todoDeleteList={this.todoDeleteList}
        />
      </div>
    );
  }
}

export default TodoAddForm;
