import { RouterPaths } from '../routes/constants/router-paths';

const getRouterUrl = (str: string): string => {
    switch (str) {
        case `${RouterPaths.BEER}${RouterPaths.BY_ID}`:
            return RouterPaths.BEER;
        case RouterPaths.BEER:
            return RouterPaths.BEER;
        case `${RouterPaths.BREWERY}${RouterPaths.BY_ID}`:
            return RouterPaths.BREWERY;
        case RouterPaths.BREWERY:
            return RouterPaths.BREWERY;
        case `${RouterPaths.LOCATION}${RouterPaths.BY_ID}`:
            return RouterPaths.LOCATION;
        case RouterPaths.LOCATION:
            return RouterPaths.LOCATION;
        case `${RouterPaths.LOCATION}${RouterPaths.NEARBY}`:
            return RouterPaths.NEARBY;
        case `${RouterPaths.LOCATION}${RouterPaths.LOCATION_NEARBY}`:
            return RouterPaths.NEARBY;
        default:
            return str;
    }
};

/**
 * @param {string} path
 * @param {string} id
 * @return string
 */
export const addIdToRoute = (path: string, id: string): string => {
    return `${getRouterUrl(path)}/${id}`;
};

/**
 * @param {string} path
 * @param {string} obj
 * @return string
 */
export const createRouterPath = (path: string, obj: {[key: string]: number|string}): string => {
    return `${getRouterUrl(path)}/` + Object.keys(obj).map(key => key + '/' + obj[key]).join('/');
};
