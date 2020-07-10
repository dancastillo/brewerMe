import { getResponse } from "../../../__mocks__/axios";
import { getBeerRoute } from "../../../server/api/beerApi/utils/route-paths";
import { IApiResponse } from "../../../server/interfaces/IApiResponse";
import { handleAxiosResponse } from "../../../server/utils/handle-axios-response";

describe('handle-axios-response', () => {
    it("test", () => {
        const axiosResponse = getResponse(getBeerRoute());
        const { data, status, statusText } = axiosResponse;

        const apiResponse: IApiResponse = { data, status, statusText };

        expect(handleAxiosResponse(axiosResponse)).toMatchObject(apiResponse);
    })
})
