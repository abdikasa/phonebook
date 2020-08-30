import React, { useState } from "react";
import Input from "./Input";

const Filter = ({ filterValue, setFilter }) => {
  const filterChange = (event) => setFilter(event.target.value);

  return (
    <Input
      onChange={filterChange}
      value={filterValue}
      label="filter shown with: "
    ></Input>
  );
};

export default Filter;
