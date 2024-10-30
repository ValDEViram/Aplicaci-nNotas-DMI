import axios from "axios";

const addActivity = async ({ name, tasks }) => {
  const response = await axios.post("http://localhost:3000/addPlan", {
    name,
    tasks,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};

// const registerUser = async ({ username, email, password }) => {
//   const response = await axios.post("http://localhost:3000/register", {
//     username,
//     email,
//     password,
//   }, {headers: { "Content-Type": "application/json"}});
//   return response.data;
// };

const getTasksPlans = async () => {
  const response = await axios.get("http://localhost:3000/getTasksPlans");
  return response.data;
};

export { addActivity, getTasksPlans };
