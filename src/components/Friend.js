import React from "react";

const Friend = ({ person, deleteFriend }) => {
  return (
    <div>
      <li>
        {person.name}: {person.phone}
        <button onClick={() => deleteFriend(person)}>delete friend</button>
      </li>
    </div>
  );
};

export default Friend;
