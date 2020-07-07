import request from "supertest";
import app from "../../../server/app";

describe("GET for Brewery routes", () => {
    it("should return 200 ok /api/location", () => {
        request(app).get("/api/location")
            .expect(200);
    });

    it("should return 200 ok /api/location/:id", () => {
        request(app).get("/api/location/123")
            .expect(200);
    });
});
