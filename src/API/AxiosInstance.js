import axios from "axios";

export const BaseURL = "https://localhost:44365/api";

const AxiosInstance = axios.create({
    baseURL: BaseURL,
    timeout : 600000,
    headers: {
        "Content-Type" : "application/json",
    },
});

export default AxiosInstance;