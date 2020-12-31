import { handleErrorResponse } from '../../../../../server/api/beerApi/utils/handle-error-response';
import { IApiError } from '../../../../../server/interfaces/IApiError';
import { AxiosError } from 'axios';

describe('handle-error-response', () => {
    interface IObject {
        [key: string]: string|number|boolean|IObject
    }

    it('handleErrorResponse', async () => {
        const err: AxiosError = {
            response: {
                data: {
                    error: true,
                    error_msg: 'server internal error'
                },
                status: 500,
                statusText: '',
                headers: '',
                config: {}
            },
            config: {
                url: 'brewer.me'
            },
            request: 'request',
            message: 'message',
            isAxiosError: false,
            toJSON: () => [],
            name: ''
        };

        const errResult: IApiError =  {
            'error': true,
            'error_msg': 'server internal error',
            'message': 'message',
            'request': 'request',
            'status': 500,
            'url': 'brewer.me',
        };

        const result = await handleErrorResponse(err);

        expect(result).toMatchObject(errResult);
    });
});
