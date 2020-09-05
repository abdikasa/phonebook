import React from "react";
import Friend from "./Friend";

const Friends = ({ filterFriends }) => {
  return (
    <ul>
      {filterFriends.map((person) => {
        return (
          <div key={person.id}>
            <Friend person={person}></Friend>
          </div>
        );
      })}
    </ul>
  );
};

export default Friends;
