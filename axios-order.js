import axios from "axios";

const RemoveCredentials = () => {
  localStorage.clear();
  window.location.href = "/login";
};

const baseURL =
process.env.REACT_APP_ENV == "prod"
    ? "https://portal.cappitallwant.com/backend"
    : process.env.REACT_APP_ENV == "demo"
    ? "https://demo.cappitallwant.com/backend"
    : process.env.REACT_APP_ENV == "dev"
    ? "http://20.204.210.226:5002"
    : "http://localhost:5002";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

instance.interceptors.response.use(
  undefined,
  function axiosRetryInterceptor(err) {
    console.log(err.response);
    if (err.response && err.response.status && err.response.status === 401) {
      RemoveCredentials();
    } else if (
      err.response &&
      err.response.status &&
      err.response.status === 502
    ) {
      alert("Something went wrong!");
    } else if (
      err.response &&
      err.response.status &&
      err.response.status === 500
    ) {
      alert("Unable to complete your request, Please retry!");
    }
    return Promise.reject(err);
  }
);

export default instance;
