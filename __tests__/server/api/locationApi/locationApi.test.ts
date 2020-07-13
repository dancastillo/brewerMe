import { getResponse } from "../../../../__mocks__/axiosResponse";
import { IAxiosResponse } from "../../../../server/api/interfaces/IAxiosResponse";
import { getLocation } from "../../../../server/api/locationApi/locationApi";
import { getLocationApiRoute } from "../../../../server/api/beerApi/utils/route-paths";


describe("Beer Api", () => {
    const address = "1 Main St, Google Drive, New York, New York";

    test("getBeers", async () => {
        const location: IAxiosResponse = getResponse(getLocationApiRoute(address));

        try {
            const results: IAxiosResponse = await getLocation(address);

            expect(results).toMatchObject(location);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: "fail", status: "fail", url: "/beers", request: "", message: "" });
        }
    });
});
