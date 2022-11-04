import request from 'supertest';
import app  from '../app.js'
import { pool } from '../db/index.js';

describe('GET /api/todos', function() {
    afterAll(()=>{
        pool.end()
    })
    it('testing Get request', async function() {
      const response = await request(app).get('/api/todos')
       
  
      expect(response.status).toEqual(200);
      console.log(response.body)
      expect(response.body).toStrictEqual({success:true, payload:expect.any(Array)})

    });

it('test for new task added', async () => {
  const data = {
    task: "complete kata",
    completionDate: "18/12/2022"
  }
const response = await request(app).post("/api/todos").send(data)
expect(response.body).toStrictEqual({success: true, payload: data})
})

  });