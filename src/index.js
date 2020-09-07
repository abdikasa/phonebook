import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//I deleted teh instructions for 2.11 to 2.18.
//You can find it in older commits of the app.

// 2.19: Phonebook  --- FINISHED
// Use the improved error message example from part 2 as a guide to show a notification that lasts for a few seconds after a successful operation is executed (a person is added or a number is changed):

// 2.20*: Phonebook --- FINISHED
// Open your application in two browsers. If you delete a person in browser 1 a short while before attempting to change the person's phone number in browser 2, you will get the following error message:

// Fix the issue according to the example shown in promise and errors in part 2. Modify the example so that the user is shown a message when the operation does not succeed. The messages shown for successful and unsuccessful events should look different:

ReactDOM.render(<App />, document.getElementById("root"));
