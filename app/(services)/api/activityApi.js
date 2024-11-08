import axios from "axios";

const addActivity = async ({ name, tasks }) => {
  const response = await axios.post("http://localhost:3000/plans/addPlan", {
    name,
    tasks,
  }, {headers: { "Content-Type": "application/json"}});
  return response.data;
};


const getTasksPlans = async () => {
  const response = await axios.get("http://localhost:3000/plans/getPlans");
  return response.data;
};

const getUserPlans = async (userID) => {
  const response = await axios.get(`http://localhost:3000/userplans/getUserPlans?userID=${userID}`);
  return response.data;
};


export { addActivity, getTasksPlans, getUserPlans };
