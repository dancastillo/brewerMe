import { IApiResponse } from "@interfaces/components/card/IApiResponse";

export const getData = (response: IApiResponse) => {
    if (response.status === 200 && response.data) {
        return { ...response.data };
    } else {
        throw 'Error - status not 200';
    }
};
