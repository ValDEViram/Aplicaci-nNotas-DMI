import axios from "axios";

const loginUser = async ({ email, password }) => {
  const response = await axios.post("http://localhost:3000/login", {
    email,
    password,
  });
  return response.data;
};

const registerUser = async ({ username, email, password }) => {
  const response = await axios.post("http://localhost:3000/register", {
    username,
    email,
    password,
  });
  return response.data;
};

export { loginUser, registerUser };
