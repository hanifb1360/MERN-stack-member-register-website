import axios from "axios";

const URL = "http://localhost:8000";

export const addMember = async (data) => {
  try {
    return await axios.post(`${URL}/posts`, data);
  } catch (error) {
    console.log("Error while calling add member Api", error);
  }
};
