import React from "react";

const Friend = ({ person }) => {
  return (
    <li>
      {person.name}: {person.phone}
    </li>
  );
};

export default Friend;
