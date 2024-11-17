import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Use environment variable or default to local
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
