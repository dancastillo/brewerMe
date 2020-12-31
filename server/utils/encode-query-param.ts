/**
 * @param {string} address
 * @return string
 */
export const encodeLocationQueryParam = (address: string) => {
    return address.split(' ').join('+');
};
