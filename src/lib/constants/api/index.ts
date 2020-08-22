import { Routes } from "@constants/routes";
import {
    BEER_API,
    BEER_API_BY_ID,
    BREWERY_API,
    BREWERY_API_BY_ID,
    LOCATION_API
} from "@constants/api/routes";

export const getDataByOption = (option: string) => {
    if (option === Routes.BEER) {
        return BEER_API;
    } else if (option === Routes.BREWERY) {
        return BREWERY_API;
    }
};

export const getDataById = (id: string, option: string) => {
    if (option === Routes.BEER) {
        return BEER_API_BY_ID(id);
    } else if (option === Routes.BREWERY) {
        return BREWERY_API_BY_ID(id);
    }
};

export const getLocationData = (city: string, state: string) => {
    return LOCATION_API(city, state);
};
