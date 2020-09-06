import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getData = () => axios.get(baseUrl);

const addPerson = (person) => axios.post(baseUrl, person);

const update = (id, person) => axios.put(`${baseUrl}/${id}`, person);

const goodbye = (id) => axios.delete(`${baseUrl}/${id}`);

export default {
  getData,
  addPerson,
  update,
  goodbye,
};
