import axios from 'axios';

const API_URL = "http://localhost:8080";

export const predictResistance = async (data) => {
  const response = await axios.post(`${API_URL}/predict`, data);
  return response.data;
};
