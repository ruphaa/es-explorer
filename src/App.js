import React, { useState } from "react";
import "./App.css";
import Version from "./components/Version";
import FeatureNestedSelection from "./components/FeatureNestedSelect";
import { EcmaContext } from "./components/RootContext";
import { esFeatures } from "./components/data";

function App() {
  const jsFeatures = esFeatures;
  const [version, setVersion] = useState(jsFeatures["ES6"]);
  const [selected, setSelected] = useState({ value: "ES6", label: "ES6" });

  const handleSelected = (selected) => {
    setSelected(selected);
    debugger;
    setVersion(jsFeatures[selected.value]);
  };

  return (
    <EcmaContext.Provider value={{ version, setVersion }}>
      <div className="App">
        <div className="top">
          <div className="top-left">
            <header>ES Explorer</header>
            <div className="sub-heading">
              Explore the JS features for your favorite ES Version
            </div>
          </div>
          <div className="top-right">
            <Version
              features={jsFeatures}
              selected={selected}
              handleSelected={handleSelected}
              setVersion={setVersion}
            />
          </div>
        </div>
        <div className="feature-selection">
          <FeatureNestedSelection />
        </div>
        <div className="feature-description">
          <div className="title"></div>
          <div className="desc"></div>
          <div className="link"></div>
        </div>
      </div>
    </EcmaContext.Provider>
  );
}

export default App;
