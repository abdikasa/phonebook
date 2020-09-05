import React from "react";
import Friend from "./Friend";

const Friends = ({ filterFriends }) => {
  return (
    <ul>
      {filterFriends.map((person) => {
        console.log(person);
        return <Friend person={person}></Friend>;
      })}
    </ul>
  );
};

export default Friends;
