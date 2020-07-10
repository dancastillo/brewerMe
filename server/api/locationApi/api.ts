// import axios, { AxiosInstance, AxiosResponse } from "axios";
//
// import "../../lib/env";
//
// const api: string  = process.env.API || "";
// const apiUsername: string = process.env.GEOLC || "";
// const apiPassword: string = process.env.API_PASSWORD || "";
//
// const httpClient: AxiosInstance = axios.create({
//     baseURL: api,
//     responseType: "json",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
//     auth: {
//         username: apiUsername,
//         password: apiPassword
//     }
// });
//
// export const handleResponse = (response : AxiosResponse): IApiResponse => {
//     const { data, status, statusText }: IApiResponse = response;
//
//     return { data, status, statusText };
// };
//
// export const handleError = (err: any) => {
//     const { error, error_msg } = err.response.data;
//     const { status } = err.response;
//     const { url } = err.config;
//     const { request } = err || undefined;
//     const { message } = err || undefined;
//
//     throw { error, error_msg, status, url, request, message };
//     // Promise.reject(error);
// };
//
// export default httpClient;
