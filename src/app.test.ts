import request from "supertest";
import { app } from "./app";

describe("server", () => {
  it("responds with dummy data", async () => {
    const res = await request(app).get("/healtz");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("ok");
  });
});
