import { handleErrorResponse } from "../../../../../server/api/beerApi/utils/handle-error-response";
import { IApiError } from "../../../../../server/interfaces/IApiError";

describe("handle-error-response", () => {
    interface IObject {
        [key: string]: string|number|boolean|IObject
    }

    it("handleErrorResponse", async () => {
        const err: IObject = {
            "response": {
                "data": {
                    "error": true,
                    "error_msg": "server internal error"
                },
                "status": 500
            },
            "config": {
                "url": "brewer.me"
            },
            "request": "request",
            "message": "message"
        };

        const errResult: IApiError =  {
            "error": true,
            "error_msg": "server internal error",
            "message": "message",
            "request": "request",
            "status": 500,
            "url": "brewer.me",
        };

        const result = await handleErrorResponse(err);

        expect(result).toMatchObject(errResult);
    })
});
