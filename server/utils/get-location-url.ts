import "./../lib/env";
import { encodeLocationQueryParam } from "./encode-query-param";

/**
 * @param {string} address
 * @return string
 */
export const getLocationUrl = (address: string) => {
    const locationApi = process.env.LOCATION_API || "";
    const locationApiKey = process.env.LOCATION_API_KEY || "";
    const loc = encodeLocationQueryParam(address);

    return `${locationApi}?address=${loc}&key=${locationApiKey}`;
};
