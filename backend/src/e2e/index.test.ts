import request from 'supertest';
import type { Express } from 'express';

import { createApp } from '../createApp';

describe("/users", () => {
    let app: Express = createApp();

    beforeAll(() => {
        app = createApp();
    });

    it('test should be implemented', () => {
        expect(true).toBe(true);
    });
    // it('should return an empty array when getting users', async () => {
    //     const response = await request(app).get('/users');
    //     expect(response.body).toStrictEqual([]);
    // });
})
