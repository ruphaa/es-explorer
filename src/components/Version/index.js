import React from "react";
import Select from "react-select";
import "./index.css";

// const colorStyles = {
//   option: (styles, { isSelected, isFocussed }) => ({
//     ...styles,
//     backgroundColor: isSelected ? "#847c77" : "#fff",
//     color: isSelected ? "#000" : "#000",
//   }),
// };
const colorStyles = {};

const Version = ({ features, selected, handleSelected }) => {
  const options = Object.keys(features).map((feature) => {
    return {
      value: feature,
      label: feature,
    };
  });

  return (
    <div className="version">
      <Select
        value={selected}
        onChange={handleSelected}
        options={options}
        className="select-control"
        styles={colorStyles}
      />
    </div>
  );
};

export default Version;
