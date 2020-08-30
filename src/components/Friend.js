import React from "react";

const Friend = ({ name, phone, id }) => {
  return (
    <li key={id}>
      {name}: {phone}
    </li>
  );
};

export default Friend;
