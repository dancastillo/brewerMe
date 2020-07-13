import request, { Response } from "supertest";
import app from "../../../server/app";
import { getResponse } from "../../../__mocks__/axiosResponse";

import { IApiResponse } from "../../../server/interfaces/IApiResponse";
import { getBreweryByIdRoute, getBreweryRoute } from "../../../server/api/beerApi/utils/route-paths";
import { RouterPaths } from "../../../server/routes/constants/router-paths";
import { addIdToRoute } from "../../../server/utils/router-url";
import { handleAxiosResponse } from "../../../server/utils/handle-axios-response";

describe("GET for Brewery routes", () => {
    const fakeId = "123456-1234-1234-1234567890";

    it("should return 200 ok /api/brewery", (done) => {
        const breweries: IApiResponse = handleAxiosResponse(getResponse(getBreweryRoute()));

        request(app)
            .get(`/api${RouterPaths.BREWERY}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(breweries);
            })
            .end(done);
    });

    it("should return 200 ok /api/brewery/:id", (done) => {
        const url = addIdToRoute(RouterPaths.BREWERY_ID, fakeId);
        const brewery: IApiResponse = handleAxiosResponse(getResponse(getBreweryByIdRoute(fakeId)));

        request(app)
            .get(`/api${url}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(brewery);
            })
            .end(done);
    });
});
