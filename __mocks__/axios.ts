import { AxiosResponse } from "axios";
import { getBeerByIdRoute, getBeerRoute } from "../server/api/beerApi/utils/route-paths";
import { IAxiosResponse } from "../server/api/beerApi/interfaces/IAxiosResponse";

const axiosResponse: AxiosResponse = {
    data: {},
    status: 200,
    statusText: "OK",
    config: {},
    headers: {},
};

const fakeId: string = "123456-1234-1234-1234567890";

export const getResponse = (url: string): IAxiosResponse => {
    switch (url) {
        case getBeerRoute():
            axiosResponse.data = {
                "object": "list",
                "url": "/beer",
                "has_more": true,
                "next_cursor": "MTAw",
                "data": [
                    {
                        "id": "1234-45-67-890-12345",
                        "name": "American IPA 1"
                    },
                    {
                        "id": "1234-45-67-890-12346",
                        "name": "American Pale Ale"
                    },
                ]
            };

            break;
        case getBeerByIdRoute(fakeId):
            axiosResponse.data = {
                "id": fakeId,
                "object": "beer",
                "name": "American IPA",
                "style": "IPA",
                "description": "",
                "abv": 0,
                "ibu": 0,
                "cb_verified": false,
                "brewer_verified": false,
                "brewer": {
                    "id": "",
                    "object": "brewer",
                    "name": "",
                    "description": "",
                    "short_description": "",
                    "url": "",
                    "cb_verified": false,
                    "brewer_verified": false,
                    "facebook_url": "",
                    "twitter_url": "",
                    "instagram_url": ""
                }
            };
            break;
        default:
            break;
    }

    return axiosResponse;
};

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
