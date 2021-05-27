import axios from "axios";

//Will BE SQL DATABASE
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
