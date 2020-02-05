import request from 'supertest';
import app from '../../src/app';

describe('Package', () => {
  it('should be able to register a package', async () => {
    const measurement = {
      id: 1,
      snr: 10,
      rssi: 20,
      success: false,
    };

    const response = await request(app)
      .post('/packages/test')
      .send(measurement);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(measurement);
  });

  it('should return status 500 if not provide a data', async () => {
    const response = await request(app)
      .post('/packages/test')
      .send();

    expect(response.status).toBe(500);
  });

  it('should return a list of all host packages order by decrescent time', async () => {
    const measurement = {
      id: 1,
      snr: 10,
      rssi: 20,
      success: false,
    };

    await request(app).post('/packages/test').send(measurement);

    const response = await request(app).get('/packages/test');

    expect(response.body[0]).toMatchObject({ ...measurement, host: 'test' });
  });

  it("should return an empty array if a host doesn't have registered measurement", async () => {
    const response = await request(app).get('/packages/test1');

    expect(response.body).toEqual([]);
  });
});