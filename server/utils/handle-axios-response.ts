import { AxiosResponse } from "axios";
import { IApiLocationResponse, IApiResponse } from "../interfaces/IApiResponse";


export const handleAxiosResponse = (response : AxiosResponse): IApiResponse => {
    return getResponse(response);
};

export const handleAxiosResponseFromGeoLocation = (response : AxiosResponse): IApiLocationResponse => {
    return <IApiLocationResponse>getResponse(response);
};

const getResponse = (response: IApiLocationResponse|IApiResponse) => {
    const { data, status, statusText } = response;

    return { data, status, statusText };
};
