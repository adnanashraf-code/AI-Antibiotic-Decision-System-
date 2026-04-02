import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const predictResistance = async (data) => {
  const response = await axios.post(`${API_URL}/predict`, data);
  return response.data;
};
