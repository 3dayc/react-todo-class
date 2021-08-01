import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TodoListView from "./TodoListView";

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
    if (e.key === "Enter") {
      e.preventDefault();
      const {
        target: { value },
      } = e;
      // this.setState({ todoList: e.target.value });
      this.setState(
        (state) => ({
          todoList: [...state.todoList, value],
        }),
        () => {
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        }
      );
      console.log(e.target.value);
      e.target.value = "";
    }
  };

  stateList = () => {
    console.log(this.state.todoList);
  };

  render() {
    return (
      <div>
        <form>
          <TextField
            name="todoText"
            label="할 일"
            onKeyPress={this.inputTextBring}
          />
          <Button
            variant="contained"
            color="primary"
            className="btnPos"
            onClick={this.stateList}
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
