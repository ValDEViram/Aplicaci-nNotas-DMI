import axios from "axios";

const loginUser = async ({ email, password }) => {
  const response = await axios.post(
    "https://big-doodles-warn.loca.lt/login",
    { email, password }
  );
  return response.data;
};

const registerUser = async ({ username, email, password }) => {
  const response = await axios.post(
    "https://big-doodles-warn.loca.lt/register",
    { username, email, password }
  );
  return response.data;
};

export { loginUser, registerUser };
