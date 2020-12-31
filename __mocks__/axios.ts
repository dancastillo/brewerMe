import { getResponse } from './axiosResponse';

const axios = {
    default: {
        get: jest.fn().mockImplementation((url: string) => {

            return Promise.resolve(getResponse(url));
        })
    },
    get: jest.fn((url: string) => {
        return Promise.resolve(getResponse(url));
    })
};

export default axios;
