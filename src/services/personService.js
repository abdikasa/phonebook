import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getData = () => axios.get(baseUrl);

const addPerson = (person) => axios.post(baseUrl, person);

const update = (id, person) => axios.put(`${baseUrl}/${id}`, person);

const goodbye = (id) => axios.delete(`${baseUrl}/${id}`);

const updatePhone = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getData,
  addPerson,
  update,
  goodbye,
  updatePhone,
};
