import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./index.css";
import { EcmaContext } from "../RootContext";

const Version = () => {
  const { version, setVersion } = useContext(EcmaContext);
  const [category, setCategory] = useState(null);
  const [feature, setFeature] = useState(null);

  const changeCategory = (category) => {
    setCategory(category);
    setFeature(null);
    if (!category.choices) {
      setVersion({ ...version, selectedMethod: category });
    } else {
      setVersion({ ...version, selectedMethod: null });
    }
  };
  const changeFeature = (feature) => {
    setFeature(feature);
    setVersion({ ...version, selectedMethod: feature });
  };

  useEffect(() => {
    if (!version.type.methods.length) {
      setCategory(null);
      setFeature(null);
    }
  }, version.type.methods.length);

  return (
    <div className="selected-list">
      <div className="main">
        <div className="title">Select a category</div>
        {version.type && version.type.methods && version.type.methods.length ? (
          <Select
            value={category}
            onChange={changeCategory}
            options={version.type.methods}
            className="select-control"
          />
        ) : (
          "Nothing Yet"
        )}
      </div>
      {category && category.choices && category.choices.length ? (
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
