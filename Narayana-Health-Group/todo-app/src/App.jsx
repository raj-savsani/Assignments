import { Todo } from "./components/Todo";
import "./App.css";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="App">
      <Todo />
      <ListTodos />
    </div>
  );
}

export default App;
