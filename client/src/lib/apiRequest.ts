import axios, { AxiosInstance } from "axios";

export const apiRequest: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
