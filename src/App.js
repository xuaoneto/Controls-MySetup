import "./App.scss";
import RgbControl from "./components/pages/RgbControl";
import InsertSVG from "./components/InsertSVG";

function App() {
  return (
    <div className="app">
      <RgbControl name="rgb1" />
      <InsertSVG name="loadingicon" width="50" height="50" />
    </div>
  );
}

export default App;
