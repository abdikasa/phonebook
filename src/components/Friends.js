import React from "react";
import Friend from "./Friend";

const Friends = ({ filterFriends, deleteFriend }) => {
  return (
    <ul>
      {filterFriends.map((person) => {
        return (
          <div key={person.id}>
            <Friend person={person} deleteFriend={deleteFriend}></Friend>
          </div>
        );
      })}
    </ul>
  );
};

export default Friends;
