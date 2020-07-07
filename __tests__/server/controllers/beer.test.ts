import request from "supertest";
import app from "../../../server/app";

describe("GET for Beer routes", () => {
    it("should return 200 ok /api/beer", () => {
        request(app).get("/api/beer")
            .expect(200);
    });

    it("should return 200 ok /api/beer/:id", () => {
        request(app).get("/api/beer/123")
            .expect(200);
    });
});
