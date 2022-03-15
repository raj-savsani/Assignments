import { Todo } from "./components/Todo";
import "./App.css";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="App">
      <Todo />
      <h1>List of Todos</h1>
      <ListTodos />
    </div>
  );
}

export default App;
