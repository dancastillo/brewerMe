import { Routes } from "@constants/routes";

// const development = "http://localhost:3001/api";
/** MOCK SERVER URL */
const development = "http://localhost:4001";
/** END MOCK SERVER URL */

const API_URL = process.env.NODE_ENV === "development"
    ? development
    : "tbd";

/** MOCK SERVER ROUTES **/
const BEER_API = `${API_URL}/beer`;
const BEER_API_BY_ID = (id: string) => { id = ""; return `${API_URL}/beerById${id}`; };

const BREWERY_API = `${API_URL}/brewery`;
const BREWERY_API_BY_ID = (id: string) => { id = ""; return `${API_URL}/breweryById${id}`; };
/** END MOCK SERVER ROUTES **/

// const BEER_API = `${API_URL}/beer`;
// const BEER_API_BY_ID = (id: string) => `${API_URL}/beerById`;
//
// const BREWERY_API = `${API_URL}/brewery`;
// const BREWERY_API_BY_ID = (id: string) => `${API_URL}/breweryById`;

export const API_BY_OPTION = (option: string) => {
    if (option === Routes.BEER) {
        return BEER_API;
    } else if (option === Routes.BREWERY) {
        return BREWERY_API;
    }
};

export const API_BY_ID = (id: string, option: string) => {
    if (option === Routes.BEER) {
        return BEER_API_BY_ID(id);
    } else if (option === Routes.BREWERY) {
        return BREWERY_API_BY_ID(id);
    }
};
