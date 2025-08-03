import { Application } from "express";
import { beforeAll, describe, expect, it } from "vitest";
import buildApp from "../../src/app.js";
import supertest from "supertest";

let app: Application;
let token: string;

// TODO: This is an API test, not ETAPI.

describe("api/metrics", () => {
    beforeAll(async () => {
        app = await buildApp();
    });

    it("returns Prometheus format by default", async () => {
        const response = await supertest(app)
            .get("/api/metrics")
            .expect(200);
        expect(response.headers["content-type"]).toContain("text/plain");
        expect(response.text).toContain("trilium_info");
        expect(response.text).toContain("trilium_notes_total");
        expect(response.text).toContain("# HELP");
        expect(response.text).toContain("# TYPE");
    });

    it("returns JSON when requested", async() => {
        const response = await supertest(app)
            .get("/api/metrics?format=json")
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

    it("returns error on invalid format", async() => {
        const response = await supertest(app)
            .get("/api/metrics?format=xml")
            .expect(500);
        expect(response.body.message).toContain("prometheus");
    });
});
