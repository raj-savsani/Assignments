import "./App.css";
import HeadingContent from "./components/HeadingContent/HeadingContent";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadingContent />
      <Main />
    </div>
  );
}

export default App;
