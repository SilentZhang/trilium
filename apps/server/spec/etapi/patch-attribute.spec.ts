import { Application } from "express";
import { beforeAll, describe, expect, it } from "vitest";
import supertest from "supertest";
import { createNote, login } from "./utils.js";
import config from "../../src/services/config.js";

let app: Application;
let token: string;

const USER = "etapi";
let createdNoteId: string;
let createdAttributeId: string;

describe("etapi/patch-attribute", () => {
    beforeAll(async () => {
        config.General.noAuthentication = false;
        const buildApp = (await (import("../../src/app.js"))).default;
        app = await buildApp();
        token = await login(app);

        createdNoteId = await createNote(app, token);

        // Create an attribute
        const response = await supertest(app)
            .post(`/etapi/attributes`)
            .auth(USER, token, { "type": "basic"})
            .send({
                "noteId": createdNoteId,
                "type": "label",
                "name": "mylabel",
                "value": "val",
                "isInheritable": true
            });
        createdAttributeId = response.body.attributeId;
        expect(createdAttributeId).toBeTruthy();
    });

    it("changes name and value", async () => {
        const state = {
            value: "CHANGED"
        };
        await supertest(app)
            .patch(`/etapi/attributes/${createdAttributeId}`)
            .auth(USER, token, { "type": "basic"})
            .send(state)
            .expect(200);

        // Ensure it got changed.
        const response = await supertest(app)
            .get(`/etapi/attributes/${createdAttributeId}`)
            .auth(USER, token, { "type": "basic"});
        expect(response.body).toMatchObject(state);
    });

    it("forbids setting disallowed property", async () => {
        const response = await supertest(app)
            .patch(`/etapi/attributes/${createdAttributeId}`)
            .auth(USER, token, { "type": "basic"})
            .send({
                noteId: "root"
            })
            .expect(400);
        expect(response.body.code).toStrictEqual("PROPERTY_NOT_ALLOWED");
    });

    it("forbids setting wrong data type", async () => {
        const response = await supertest(app)
            .patch(`/etapi/attributes/${createdAttributeId}`)
            .auth(USER, token, { "type": "basic"})
            .send({
                value: null
            })
            .expect(400);
        expect(response.body.code).toStrictEqual("PROPERTY_VALIDATION_ERROR");
    });

});
