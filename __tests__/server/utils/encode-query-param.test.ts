import { encodeLocationQueryParam } from '../../../server/utils/encode-query-param';


describe('Utils tests', () => {
    test('Testing getUrl from Utils dir', () => {

        const testStr = 'This is a test';
        const urlStr = 'This+is+a+test';

        const urlString = encodeLocationQueryParam(testStr);

        expect(urlString).toEqual(urlStr);
    });
});
