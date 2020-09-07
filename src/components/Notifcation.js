import React from "react";
const Notification = ({ message, style = "" }) => {
  const success = {
    color: "green",
    border: "2px solid green",
    padding: "1rem 0.5rem",
    backgroundColor: "lightgrey",
    marginBottom: "1rem",
    fontSize: "20px",
    fontWeight: "bold",
  };
  const failure = {
    color: "red",
    border: "2px solid red",
    padding: "1rem 0.5rem",
    backgroundColor: "lightgrey",
    marginBottom: "1rem",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return message === "" ? (
    ""
  ) : style === "" ? (
    <div style={success}>{message}</div>
  ) : (
    <div style={failure}>{message}</div>
  );
};

export default Notification;
