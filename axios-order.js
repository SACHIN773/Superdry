import axios from "axios";

/**
 * Clear auth data & redirect to login
 */
const clearAuthAndRedirect = () => {
  localStorage.clear();
  window.location.href = "/login";
};

/**
 * Environment based base URL
 */
const BASE_URL =
  process.env.REACT_APP_ENV === "prod"
    ? "https://portal.yourdomain.com/backend"
    : process.env.REACT_APP_ENV === "demo"
    ? "https://demo.yourdomain.com/backend"
    : process.env.REACT_APP_ENV === "dev"
    ? "http://20.204.210.226:5002"
    : "http://localhost:5002";

/**
 * Axios instance
 */
const httpClient = axios.create({
  baseURL: BASE_URL,
});

/**
 * Request interceptor
 */
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response interceptor
 */
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      clearAuthAndRedirect();
    } else if (status === 502) {
      alert("Server error. Please try again later.");
    } else if (status === 500) {
      alert("Unable to process your request.");
    }

    return Promise.reject(error);
  }
);

export default httpClient;
