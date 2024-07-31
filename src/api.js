// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/users';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
