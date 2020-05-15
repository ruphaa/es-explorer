import React, { useState } from "react";
import Select from "react-select";
import "./index.css";

const options = [
  {
    value: "es6",
    label: "ES6",
  },
  {
    value: "es7",
    label: "ES7",
  },
  {
    value: "es8",
    label: "ES8",
  },
  {
    value: "es9",
    label: "ES9",
  },
  {
    value: "es10",
    label: "ES10",
  },
];

// const colorStyles = {
//   option: (styles, { isSelected, isFocussed }) => ({
//     ...styles,
//     backgroundColor: isSelected ? "#847c77" : "#fff",
//     color: isSelected ? "#000" : "#000",
//   }),
// };
const colorStyles = {};

const Version = () => {
  const [selected, setSelected] = useState(null);
  const handleChange = (selected) => {
    setSelected(selected);
  };
  return (
    <div className="version">
      <Select
        value={selected}
        onChange={handleChange}
        options={options}
        className="select-control"
        styles={colorStyles}
      />
      {/* <select name="versions" id="es">
        <option value="ES6">ES6</option>
        <option value="ES7">ES7</option>
        <option value="ES8">ES8</option>
        <option value="ES9">ES9</option>
      </select> */}
    </div>
  );
};

export default Version;
