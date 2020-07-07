import request from "supertest";
import app from "../../../server/app";

describe("GET for Brewery routes", () => {
    it("should return 200 ok /api/brewery", () => {
        request(app).get("/api/brewery")
            .expect(200);
    });

    it("should return 200 ok /api/brewery/:id", () => {
        request(app).get("/api/brewery/123")
            .expect(200);
    });
});
