import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-project-a9c8b-default-rtdb.firebaseio.com/",
});

export default instance;
