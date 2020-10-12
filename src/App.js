import React, { useState } from "react";
import "./App.css";
import Version from "./components/Version";
import FeatureNestedSelection from "./components/FeatureNestedSelect";
import { EcmaContext } from "./components/RootContext";
import { esFeatures } from "./components/data";
import Prism from "prismjs";
import "./prism.css";

function App() {
  const jsFeatures = esFeatures;

  const defaultVersion = {
    type: jsFeatures["ES6"],
    selectedMethod: null,
  };

  const [version, setVersion] = useState(defaultVersion);
  const [selected, setSelected] = useState({ value: "ES6", label: "ES6" });

  const handleSelected = (selected) => {
    setSelected(selected);
    setVersion({
      type: jsFeatures[selected.value],
      selectedMethod: null,
    });
  };

  const highlightHTML = (str) => {
    return Prism.highlight(str, Prism.languages.javascript, "javscript");
  };

  return (
    <EcmaContext.Provider value={{ version, setVersion }}>
      <div className="App">
        <div className="top">
          <div className="top-left">
            <header>ES Explorer</header>
            {/* <pre class="">
              <code class="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: HTML,
                  }}
                />
              </code>
            </pre> */}

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
        <div className="content">
          <div className="left">
            <div className="feature-selection">
              <FeatureNestedSelection />
            </div>
            {version.selectedMethod ? (
              <div className="feature-description">
                <div className="title">{version.selectedMethod.label}</div>
                <div className="desc">{version.selectedMethod.desc}</div>
                <div className="link">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={version.selectedMethod.link}
                  >
                    Further Reading
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="right">
            {version.selectedMethod && version.selectedMethod.input ? (
              <div className="code">
                <div className="title">Usage:</div>
                <pre>
                  <code>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: highlightHTML(version.selectedMethod.input),
                      }}
                    />
                  </code>
                </pre>
              </div>
            ) : (
              ""
            )}
            {version.selectedMethod && version.selectedMethod.output ? (
              <div className="code mt-5">
                <div className="title">Output:</div>
                <pre>
                  <code>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: highlightHTML(version.selectedMethod.output),
                      }}
                    ></div>
                  </code>
                </pre>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </EcmaContext.Provider>
  );
}

export default App;
