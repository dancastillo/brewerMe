import { IApiError } from "../../../interfaces/IApiError";
import { AxiosError } from "axios";

export const handleErrorResponse = (err: AxiosError): IApiError => {
    const { data } = err.response || {};
    const { error, error_msg } = data || {};
    const { status } = err.response || {};
    const { url } = err.config || {};
    const { request } = err || {};
    const { message } = err || {};

    return { error, error_msg, status, url, request, message };
};

