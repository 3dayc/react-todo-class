import TodoHeader from "./components/TodoHeader";
import TodoAddForm from "./components/TodoAddForm";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <TodoHeader />
      <TodoAddForm />
    </div>
  );
}

export default App;
