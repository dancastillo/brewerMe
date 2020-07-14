import request, { Response } from "supertest";
import app from "../../../server/app";
import { getResponse } from "../../../__mocks__/axiosResponse";

import { IApiResponse } from "../../../server/interfaces/IApiResponse";
import { getLocationByIdRoute, getLocationsNearbyRoute } from "../../../server/api/beerApi/utils/route-paths";
import { addIdToRoute, createRouterPath } from "../../../server/utils/router-url";
import { RouterPaths } from "../../../server/routes/constants/router-paths";
import { handleAxiosResponse } from "../../../server/utils/handle-axios-response";

describe("GET for Brewery routes", () => {
    const fakeId = "123456-1234-1234-1234567890";
    const fakeLatitude = 0;
    const fakeLongitude = 0;

    it("should return 200 ok /api/location", (done) => {
        const url = addIdToRoute(RouterPaths.LOCATION_ID, fakeId);
        const location: IApiResponse = handleAxiosResponse(getResponse(getLocationByIdRoute(fakeId)));

        request(app)
            .get(`/api${url}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(location);
            })
            .end(done);
    });

    it("should return 200 ok /api/location/:id", (done) => {
        const locationObj: {[key: string]: number} = {
            "latitude": 0,
            "longitude": 0
        };

        const url = createRouterPath(RouterPaths.LOCATION_NEARBY, locationObj);

        const nearbyLocations: IApiResponse = handleAxiosResponse(
            getResponse(getLocationsNearbyRoute(fakeLatitude, fakeLongitude))
        );

        request(app)
            .get(`/api${url}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(nearbyLocations);
            })
            .end(done);
    });
});
