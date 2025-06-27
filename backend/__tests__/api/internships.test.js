const request = require('supertest');
const app = require('../../server');
let createdId;
describe('Internship API Endpoints', () => {
  it('GET /api/internships → should return an array', async () => {
    const res = await request(app).get('/api/internships');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it('POST /api/internships → should create a new internship', async () => {
    const res = await request(app)
      .post('/api/internships')
      .send({
        company: 'OpenAI',
        role: 'AI Intern',
        status: 'Applied',
        applied_on: '2025-06-19'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('id');
    createdId = res.body.id;
  });
  it('PUT /api/internships/:id → should update internship status', async () => {
    const res = await request(app)
      .put(`/api/internships/${createdId}`)
      .send({ status: 'Interview' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Internship updated successfully');
  });
  it('DELETE /api/internships/:id → should delete internship', async () => {
    const res = await request(app)
      .delete(`/api/internships/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Internship deleted successfully');
  });
});