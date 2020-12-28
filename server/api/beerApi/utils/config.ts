import { AxiosRequestConfig } from 'axios';

import '../../../lib/env';

const api: string  = process.env.API || '';
const apiUsername: string = process.env.API_KEY || '';
const apiPassword: string = process.env.API_PASSWORD || '';

export const config: AxiosRequestConfig = {
    baseURL: api,
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    auth: {
        username: apiUsername,
        password: apiPassword
    }
};
