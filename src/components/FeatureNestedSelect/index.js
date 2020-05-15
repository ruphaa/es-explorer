import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./index.css";
import { EcmaContext } from "../RootContext";

const Version = () => {
  const { version } = useContext(EcmaContext);
  const [category, setCategory] = useState(null);
  const [feature, setFeature] = useState(null);

  const changeCategory = (category) => {
    setCategory(category);
  };
  const changeFeature = (feature) => {
    setFeature(feature);
  };

  useEffect(() => {
    if (!version.methods.length) {
      setCategory(null);
      setFeature(null);
    }
  });

  return (
    <div className="selected-list">
      <div className="main">
        <div className="title">Select a category</div>
        {version && version.methods && version.methods.length ? (
          <Select
            value={category}
            onChange={changeCategory}
            options={version.methods}
            className="select-control"
          />
        ) : (
          "Nothing Yet"
        )}
      </div>
      {category && category.choices.length ? (
        <div className="main sub">
          <div className="title">Select a functionality</div>
          <Select
            value={feature}
            onChange={changeFeature}
            options={category.choices}
            className="select-control"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Version;
