import AxiosInstance, { BaseURL } from "./AxiosInstance"
import ResponseHandler from "./ResponseHandler";

export const GetRequest = async (endpoint, params = {}) => {
    try {
        const url = BaseURL + endpoint;
        const response = await AxiosInstance.get(url, { params: params });
        const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
        return responseData;
    } catch (error) {
        return new ResponseHandler(
            500,
            "API Url is not Available",
            null
        );
    }
}

export const PostRequest = async (endpoint, data = {}) => {
    try {
        const url = BaseURL + endpoint;
        const response = await AxiosInstance.post(url, data);
        const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
        return responseData;
    } catch (error) {
        return new ResponseHandler(
            500,
            "API Url is not Available",
            null
        );
    }
}

export const PutRequest = async (endpoint, data = {}, params = {}) => {
    try {
        const url = BaseURL + endpoint;
        const response = await AxiosInstance.put(url, data, { params: params });
        const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
        return responseData;
    } catch (error) {
        console.log(error);
        return new ResponseHandler(
            500,
            "API Url is not Available",
            null
        );
    }
}

export const PutRequestWithParams = async (endpoint, params = {}) => {
    try {
        const url = BaseURL + endpoint;
        const response = await AxiosInstance.put(url, null, { params: params });
        const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
        return responseData;
    } catch (error) {
        console.log(error);
        return new ResponseHandler(
            500,
            "API Url is not Available",
            null
        );
    }
}

export const DeleteRequest = async (endpoint, params = {}) => {
    try {
        const url = BaseURL + endpoint;
        const response = await AxiosInstance.delete(url, { params: params });
        const responseData = new ResponseHandler(response.data.ResponseCode, response.data.Message, response.data.Data);
        return responseData;
    } catch (error) {
        return new ResponseHandler(
            500,
            "API Url is not Available",
            null
        );
    }
}