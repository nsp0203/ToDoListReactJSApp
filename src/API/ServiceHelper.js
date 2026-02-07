import AxiosInstance, { BaseURL } from "./AxiosInstance"
import ResponseHandler from "./ResponseHandler";

export const GetRequest = async (endpoint, params = {}) => {
    const url = BaseURL + endpoint;
    const response = await AxiosInstance.get(url, { params: params});
    const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
    return responseData;
}

export const PostRequest = async (endpoint, data = {}) => {
    const url = BaseURL + endpoint;
    const response = await AxiosInstance.post(url, data);
    const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
    return responseData;
}

export const PutRequest = async (endpoint, data ={}, params = {}) => {
    const url = BaseURL + endpoint;
    const response = await AxiosInstance.put(url, data, {params : params});
    const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
    return responseData;
}

export const DeleteRequest = async (endpoint, params = {}) => {
    const url = BaseURL + endpoint;
    const response = await AxiosInstance.delete(url, {params: params});
    const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
    return responseData;
}