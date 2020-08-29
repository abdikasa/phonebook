import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 2.6: The Phonebook Step1 ----FINISHED
// Let's create a simple phonebook. In this part we will only be adding names to the phonebook.
// Let us start with implementing the addition of a person to phonebook.
// The newName state is meant for controlling the form input element.

// 2.7: The Phonebook Step2 ----FINISHED
// Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task.

// Issue a warning with the alert command when such an action is attempted:

// 2.8: The Phonebook Step3 ---- FINISHED
// Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):

// 2.9*: The Phonebook Step4 ----FINISHED
// Implement a search field that can be used to filter the list of people by name:

ReactDOM.render(<App />, document.getElementById("root"));
