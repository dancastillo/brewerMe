import { RouterPaths } from "../../../server/routes/constants/router-paths";
import { addIdToRoute, createRouterPath } from "../../../server/utils/router-url";

describe("router-url", () => {
    const fakeId = "1234-56-7890";
    const url = "/brewer.me";

    it("getRouteUrl", () => {
        expect(addIdToRoute(RouterPaths.BEER, fakeId)).toEqual(`${RouterPaths.BEER}/${fakeId}`);
        console.log(addIdToRoute(RouterPaths.BEER_ID, fakeId));
        expect(addIdToRoute(RouterPaths.BEER_ID, fakeId)).toEqual(`${RouterPaths.BEER}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.BREWERY, fakeId)).toEqual(`${RouterPaths.BREWERY}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.BREWERY_ID, fakeId)).toEqual(`${RouterPaths.BREWERY}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.LOCATION, fakeId)).toEqual(`${RouterPaths.LOCATION}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.LOCATION_ID, fakeId)).toEqual(`${RouterPaths.LOCATION}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.LOCATION_NEARBY, fakeId))
            .toEqual(`${RouterPaths.LOCATION_NEARBY_BASE}/${fakeId}`);
        expect(addIdToRoute(RouterPaths.LOCATION_NEARBY_BASE, fakeId))
            .toEqual(`${RouterPaths.LOCATION_NEARBY_BASE}/${fakeId}`);
        expect(addIdToRoute(url, fakeId)).toEqual(`${url}/${fakeId}`);
    });

    it("createRouterPath", () => {
       const obj = {"latitude": 0, "longitude": 0};
       expect(createRouterPath(url, obj)).toEqual(`${url}/latitude/0/longitude/0`);
    });
});

