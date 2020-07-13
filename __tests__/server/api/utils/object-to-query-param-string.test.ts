import { objectToQueryParam } from "../../../../../server/api/utils/object-to-query-param-string";

describe("objectToQueryParam.ts", () => {
    test("objectToQueryParam", () => {
        const url = "brewer.me";
        const obj: {[key: string]: string} = {
            "brewer": "me",
            "objectTo": "queryParam"
        };
        const queryParam = `${url}?brewer=me&objectTo=queryParam`;
        const results = objectToQueryParam(url, obj);

        expect(results).toEqual(queryParam);
    });
});
