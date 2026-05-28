import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:5174/api/tests",
});

export const createTest = async (data) => {
  try {
    const res = await API.post("/create", data);
    return res.data;
  } catch (err) {
    console.error("API ERROR:", err.response?.data || err.message);
    throw new Error(err.response?.data?.message || "API Request Failed");
  }
};

export const getTests = async () => {
  try {
    const res = await API.get("/");
    return res.data;
  } catch (err) {
    console.error("API ERROR:", err.response?.data || err.message);
    throw new Error("Could not load tests");
  }
};
