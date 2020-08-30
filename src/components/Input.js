import React from "react";

const Input = ({ onChange, value, label }) => {
  return (
    <div>
      {label} <input onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
