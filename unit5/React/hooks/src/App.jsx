import "./App.css";
import Counter from "./components/Counter";
import Grocery from "./components/Grocery";

function App() {
  return (
    <div className="App">
      <Grocery />
      {/* <Counter initial={0}/> */}
    </div>
  );
}

export default App;
