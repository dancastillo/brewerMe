import request, { Response } from 'supertest';
import app from '../../../server/app';
import { getResponse } from '../../../__mocks__/axiosResponse';

import { IApiResponse } from '../../../server/interfaces/IApiResponse';
import { getBeerByIdRoute, getBeerRoute } from '../../../server/api/beerApi/utils/route-paths';
import { RouterPaths } from '../../../server/routes/constants/router-paths';
import { addIdToRoute } from '../../../server/utils/router-url';
import { handleAxiosResponse } from '../../../server/utils/handle-axios-response';

describe('Beer routes', () => {
    const fakeId = '123456-1234-1234-1234567890';

    it('should return 200 ok /api/beer', (done) => {
        const beers: IApiResponse = handleAxiosResponse(getResponse(getBeerRoute()));

        request(app)
            .get(`/api${RouterPaths.BEER}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(beers);
            })
            .end(done);
    });

    it('should return 200 ok /api/beer/:id', (done) => {
        const url = addIdToRoute(RouterPaths.BEER_ID, fakeId);
        const beer: IApiResponse = handleAxiosResponse(getResponse(getBeerByIdRoute(fakeId)));

        request(app).get(`/api${url}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response: Response) => {
                expect(response.body).toMatchObject(beer);
            })
            .end(done);
    });
});
