import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//I deleted teh instructions for 2.1 to 2.10.
//You can find it in older commits of the app.

//2.11: The Phonebook Step6 -----Starting
//We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.
//Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

ReactDOM.render(<App />, document.getElementById("root"));
