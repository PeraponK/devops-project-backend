const request = require('supertest');
const app = require('../src/app');

describe('GET /test', () => {
  it('should return 200 and correct message', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('test server');
  });
});
