import { IAxiosResponse } from '../server/api/interfaces/IAxiosResponse';
import { getBeerByIdRoute, getBeerRoute } from '../server/api/beerApi/utils/route-paths';

import '../server/lib/env';
import { AxiosResponse } from 'axios';

// FROM env for api key
// TODO: figure out a better way to pass api key in query (axios)
const mockLocationApiUrl: string  = process.env.LOCATION_MOCK || '';

const fakeId = '123456-1234-1234-1234567890';

const axiosResponse: AxiosResponse = {
    data: {},
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
};



export const getResponse = (url: string): IAxiosResponse => {
    switch (url) {
        case getBeerRoute():
            axiosResponse.data = {
                 object: 'list',
                 url: '/beer',
                 has_more: true,
                 next_cursor: 'MTAw',
                 data: [
                    {
                         id: '1234-45-67-890-12345',
                         name: 'American IPA 1'
                    },
                    {
                         id: '1234-45-67-890-12346',
                         name: 'American Pale Ale'
                    },
                ]
            };

            break;
        case getBeerByIdRoute(fakeId):
            axiosResponse.data = {
                 id: fakeId,
                 object: 'beer',
                 name: 'American IPA',
                 style: 'IPA',
                 description: '',
                 abv: 0,
                 ibu: 0,
                 cb_verified: false,
                 brewer_verified: false,
                 brewer: {
                     id: '',
                     object: 'brewer',
                     name: '',
                     description: '',
                     short_description: '',
                     url: '',
                     cb_verified: false,
                     brewer_verified: false,
                     facebook_url: '',
                     twitter_url: '',
                     instagram_url: ''
                }
            };
            break;

        case mockLocationApiUrl:
            axiosResponse.data = {
                status: '',
                results: {
                    types: [],
                    formatted_address: '',
                    address_components: [{
                        long_name: '',
                        short_name: '',
                        types: []
                    }],
                    postcode_localities: [],
                    geometry: {
                        bounds: {
                            northeast: '',
                            southwest: ''
                        },
                        location: {
                            northeast: '',
                            southwest: ''
                        },
                        location_type: '',
                        viewport: {
                            northeast: '',
                                southwest: ''
                        },
                    },
                    plus_code: 0,
                    partial_match: '',
                    place_id: ''
                }
            };

            break;
        default:
            break;
    }

    return axiosResponse;
};
