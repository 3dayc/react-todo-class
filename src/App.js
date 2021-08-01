import TodoHeader from "./components/TodoHeader";
import TodoAddForm from "./components/TodoAddForm";
// import TodoListView from "./components/TodoListView";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <TodoHeader />
      <TodoAddForm />
      {/* <TodoListView /> */}
    </div>
  );
}

export default App;
