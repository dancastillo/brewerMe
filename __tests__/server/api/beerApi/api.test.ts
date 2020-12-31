import { IApiResponse } from '../../../../server/interfaces/IApiResponse';
import { getResponse } from '../../../../__mocks__/axiosResponse';
import {
    getBeerByIdRoute,
    getBeerRoute, getBreweryByIdRoute, getBreweryRoute, getLocationByIdRoute,
    getLocationsNearbyRoute
} from '../../../../server/api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../../../server/api/interfaces/IAxiosResponse';
import {
    getBeerById,
    getBeers,
    getBrewery,
    getLocationById,
    getLocationsNearby
} from '../../../../server/modules/beer/beer.service';


describe('Beer Api', () => {
    const fakeId = '123456-1234-1234-1234567890';
    const fakeLatitude = 0;
    const fakeLongitude = 0;

    test('getBeers', async () => {
        const beers: IAxiosResponse = getResponse(getBeerRoute());

        try {
            const results: IAxiosResponse = await getBeers();

            expect(results).toMatchObject(beers);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });

    test('getBeerById', async () => {
        const beer: IAxiosResponse = getResponse(getBeerByIdRoute(fakeId));

        try {
            const results: IAxiosResponse = await getBeerById(fakeId);

            expect(results).toMatchObject(beer);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });

    test('getBrewery', async () => {
        const breweries: IAxiosResponse = getResponse(getBreweryRoute());

        try {
            const results: IAxiosResponse = await getBrewery();

            expect(results).toMatchObject(breweries);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });

    test('getBreweryById', async () => {
        const brewery: IAxiosResponse = getResponse(getBreweryByIdRoute(fakeId));

        try {
            const results: IAxiosResponse = await getBeerById(fakeId);

            expect(results).toMatchObject(brewery);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });

    test('getLocationById', async () => {
        const location: IApiResponse = getResponse(getLocationByIdRoute(fakeId));

        try {
            const results: IApiResponse = await getLocationById(fakeId);
            expect(results).toMatchObject(location);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });

    test('nearByLocations', async () => {
        const nearbyLocations: IApiResponse = getResponse(getLocationsNearbyRoute(fakeLatitude, fakeLongitude));

        try {
            const results: IApiResponse = await getLocationsNearby(fakeLatitude, fakeLongitude);
            console.log(results);
            expect(results).toMatchObject(nearbyLocations);
        } catch (err) {
            expect(err).toEqual({ error: 500, error_msg: 'fail', status: 'fail', url: '/beers', request: '', message: '' });
        }
    });
});
