import { AxiosResponse } from "axios";
import { IApiResponse } from "../interfaces/IApiResponse";


export const handleAxiosResponse = (response : AxiosResponse): IApiResponse => {
    const { data, status, statusText }: IApiResponse = response;

    return { data, status, statusText };
};
