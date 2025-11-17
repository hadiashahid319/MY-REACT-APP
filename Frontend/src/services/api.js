import axios from "axios";

const url = "http://localhost:5000";

export const viewuser =async (userdata) => {
  return await axios.post(`${url}/Login`, userdata);
};

export const registerUser = async (userdata) => {
  return await axios.post(`${url}/register`, userdata, {
  });
};
export const submitRatingAPI = async (userdata) =>{
   return await axios.post(`${url}/rating`, userdata, {
  });
};

export const addItem = async (itemData) => {
  return await axios.post(`${url}/admin`, itemData);
};
  
export const addItemToCart = async (item) => {
    const response = await axios.post(`${url}/clicked`, item);
    console.log("Server response:", response.data);
};

export const deleteItem = async (item) => {
  const response = await axios.post(`${url}/delete`, item);
  return response.data;
};

export const updateItem = async (data) => {
  return await axios.post(`${url}/update`, data);
};