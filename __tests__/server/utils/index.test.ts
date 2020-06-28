import { getUrl } from "../../../server/utils";

describe("Utils tests", () => {
    test("Testing getUrl from Utils dir", () => {

        const testStr: string = "This is a test";
        const urlStr: string = "This+is+a+test";

        const urlString = getUrl(testStr);

        expect(urlString).toEqual(urlStr);
    });
});
