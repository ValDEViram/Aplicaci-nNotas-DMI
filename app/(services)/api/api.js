import axios from "axios";

const loginUser = async ({ email, password }) => {
  const response = await axios.post("http://localhost:3000/login", {
    email,
    password,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};

const registerUser = async ({ username, email, password }) => {
  const response = await axios.post("http://localhost:3000/register", {
    username,
    email,
    password,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/getAllUsers");
  return response.data;
};

export { loginUser, registerUser, getUsers };
