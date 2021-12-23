import "./App.css";

function App() {
  return (
    <div className="App">
      <MobileOpreatingSystem></MobileOpreatingSystem>
      <MobileManufacters></MobileManufacters>
    </div>
  );
}
const c1 = ["Android", "Blackberry", "iPhone", "Windows"];
const c2 = ["Samsung", "HTC", "Micromax", "Apple"];
function MobileOpreatingSystem() {
  return (
    <div>
      <h1>Mobile Opreating System</h1>
      <ul>
        {c1.map((c,index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

function MobileManufacters() {
  return (
    <div>
      <h1>Mobile Manufacturer</h1>
      <ul>
        {c2.map((c,index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
