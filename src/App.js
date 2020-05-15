import React from "react";
import "./App.css";
import Version from "./components/Version";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="top-left">
          <header>ES Explorer</header>
          <div className="sub-heading">
            Explore the JS features for your favorite ES Version
          </div>
        </div>
        <div className="top-right">
          <Version />
        </div>
      </div>
    </div>
  );
}

export default App;
