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

// 2.17: Phonebook step9 --- FINISHED
// Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the window.confirm method:

// The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource's URL. If we are deleting e.g. a person who has the id 2, we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2. No data is sent with the request.

// You can make an HTTP DELETE request with the axios library in the same way that we make all of the other requests.

// 2.18*: Phonebook step10 ------STARTING
// Change the functionality so that if a number is added to an already existing user, the new number will replace the old number. It's recommended to use the HTTP PUT method for updating the phone number.

// If the person's information is already in the phonebook, the application can confirm the action from the user

ReactDOM.render(<App />, document.getElementById("root"));
