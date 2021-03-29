import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
