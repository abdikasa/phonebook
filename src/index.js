import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//I deleted teh instructions for 2.1 to 2.10.
//You can find it in older commits of the app.

//2.11: The Phonebook Step6 ---- FINISHED
//We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.
//Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

// 2.15: Phonebook step7 --- FINISHED
// Let's return to our phonebook application.
// Currently the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.

// 2.16: Phonebook step8  ---FINISHED
// Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.

ReactDOM.render(<App />, document.getElementById("root"));
