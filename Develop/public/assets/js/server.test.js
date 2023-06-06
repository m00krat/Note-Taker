// const fs = require('fs');
// const path = require('path');
// const request = require('supertest');
// const app = require('../../assets/js/server.js');

// describe('Note Taker API', () => {
//   describe('GET /api/notes', () => {
//     it('should return all saved notes', async () => {
//       const res = await request(app).get('/api/notes');
//       const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../assets/db/db.json'), 'utf8'));
//       expect(res.status).toBe(200);
//       expect(res.body).toEqual(notes);
//     });
//   });

//   describe('POST /api/notes', () => {
//     it('should add a new note', async () => {
//       const newNote = { title: 'Test Note', text: 'This is a test note.' };
//       const res = await request(app).post('/api/notes').send(newNote);
//       const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../assets/db/db.json'), 'utf8'));
//       expect(res.status).toBe(200);
//       expect(notes).toContainEqual(newNote);
//     });
//   });
// });
