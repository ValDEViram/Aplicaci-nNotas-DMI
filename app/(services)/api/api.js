import axios from "axios";

const loginUser = async ({ email, password }) => {
  const response = await axios.post("http://localhost:3000/users/login", {
    email,
    password,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};

const registerUser = async ({ username, email, password }) => {
  const response = await axios.post("http://localhost:3000/users/register", {
    username,
    email,
    password,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users/getAllUsers");
  return response.data;
};

export { loginUser, registerUser, getUsers };
