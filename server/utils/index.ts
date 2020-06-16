/**
 * @param address
 * @return string
 */
export const getUrl = (address: string): string => {
    return address.replace(" ", "+");
};
