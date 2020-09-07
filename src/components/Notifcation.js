import React from "react";
const Notification = ({ message }) => {
  const success = {
    color: "green",
    border: "2px solid green",
    padding: "1rem 0.5rem",
    backgroundColor: "lightgrey",
    marginBottom: "1rem",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return message === "" ? "" : <div style={success}>{message}</div>;
};

export default Notification;
