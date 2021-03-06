import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "X-Api-Key": process.env.REACT_APP_API_KEY }
});
