/**
 * @param url
 * @param obj
 * @return string
 */
export const objectToQueryParam = (url: string, obj: {[key: string]: string}): string => {
    return `${url}?` + Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
};
