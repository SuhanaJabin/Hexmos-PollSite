import Heading from "./Heading";
import SlideBar from "./SlideBar";
import logo from "./logo.svg";
//import "./App.css";
import "./mystyle.css";

function App() {
  return (
    <div className="main">
      <div
        style={{
          margin: "0px",
          padding: "1rem",
          backgroundColor: "rgb(231, 231, 221)",
          width: "60%",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
        className="App"
      >
       <Heading />
       <SlideBar />
      </div>
    </div>
  );
}

export default App;
