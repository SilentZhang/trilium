import { Application } from "express";
import { beforeAll, describe, expect, it } from "vitest";
import supertest from "supertest";
import { login } from "./utils.js";
import config from "../../src/services/config.js";

let app: Application;
let token: string;

const USER = "etapi";

describe("etapi/metrics", () => {
    beforeAll(async () => {
        config.General.noAuthentication = false;
        const buildApp = (await (import("../../src/app.js"))).default;
        app = await buildApp();
        token = await login(app);
    });

    it("returns Prometheus format by default", async () => {
        const response = await supertest(app)
            .get("/etapi/metrics")
            .auth(USER, token, { "type": "basic"})
            .expect(200);
        expect(response.headers["content-type"]).toContain("text/plain");
        expect(response.text).toContain("trilium_info");
        expect(response.text).toContain("trilium_notes_total");
        expect(response.text).toContain("# HELP");
        expect(response.text).toContain("# TYPE");
    });

    it("returns JSON when requested", async() => {
        const response = await supertest(app)
            .get("/etapi/metrics?format=json")
            .auth(USER, token, { "type": "basic"})
            .expect(200);
        expect(response.headers["content-type"]).toContain("application/json");
        expect(response.body.version).toBeTruthy();
        expect(response.body.database).toBeTruthy();
        expect(response.body.timestamp).toBeTruthy();
        expect(response.body.database.totalNotes).toBeTypeOf("number");
        expect(response.body.database.activeNotes).toBeTypeOf("number");
        expect(response.body.noteTypes).toBeTruthy();
        expect(response.body.attachmentTypes).toBeTruthy();
        expect(response.body.statistics).toBeTruthy();
    });

    it("returns Prometheus format explicitly", async () => {
        const response = await supertest(app)
            .get("/etapi/metrics?format=prometheus")
            .auth(USER, token, { "type": "basic"})
            .expect(200);
        expect(response.headers["content-type"]).toContain("text/plain");
        expect(response.text).toContain("trilium_info");
        expect(response.text).toContain("trilium_notes_total");
    });

    it("returns error on invalid format", async() => {
        const response = await supertest(app)
            .get("/etapi/metrics?format=xml")
            .auth(USER, token, { "type": "basic"})
            .expect(500);
        expect(response.body.message).toContain("prometheus");
    });

    it("should fail without authentication", async() => {
        await supertest(app)
            .get("/etapi/metrics")
            .expect(401);
    });
});
