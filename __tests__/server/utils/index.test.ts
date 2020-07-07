import { getUrl } from "../../../server/utils";

describe("Utils tests", () => {
    test("Testing getUrl from Utils dir", () => {

        const testStr = "This is a test";
        const urlStr = "This+is+a+test";

        const urlString = getUrl(testStr);

        expect(urlString).toEqual(urlStr);
    });
});
