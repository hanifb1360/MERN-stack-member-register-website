import axios from "axios";

const URL = "http://localhost:8000";

export const addMember = async (data) => {
  console.log(data)
  try {
    return await axios.post(`${URL}/posts`, data);
  } catch (error) {
    console.log("Error while calling add member Api", error);
  }
};

// export const getMembers = async (data) => {
//   console.log(data)
//   try {
//     return await axios.get(`${URL}/posts`, data);
//   } catch (error) {
//     console.log("Error while calling get members Api", error);
//   }
// };

// export const getSpecificMember = async (data) => {
//   console.log(data)
//   try {
//     return await axios.get(`${URL}/posts/postId`, data);
//   } catch (error) {
//     console.log("Error while calling get members Api", error);
//   }
// };

export const deleteMember = async (user) => {

  try {
    return await axios.delete(`${URL}/posts/${user._id}`);
  } catch (error) {
     console.log("Error while deleting member", error);
  }
};

export const updateMember = async (user) => {
  
  try {
    return await axios.patch(`${URL}/posts/${user._id}`, user);
  } catch (error) {
     console.log("Error while deleting member", error);
  }
};


