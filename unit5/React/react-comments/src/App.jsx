import "./App.css";
import Comment from "./components/Comment";
import { commentData } from "../src/components/commentData";

function App() {
  // console.log("commentData.replies:", commentData);
  return (
    <div className="App">
      <Comment key={commentData.id} reply={commentData} />
      
    </div>
  );
}

export default App;
