import React from "react";
import Friend from "./Friend";

const Friends = ({ filterFriends }) => {
  return (
    <ul>
      {filterFriends.map((person, id) => {
        return (
          <Friend key={id} name={person.name} phone={person.phone}></Friend>
        );
      })}
    </ul>
  );
};

export default Friends;
