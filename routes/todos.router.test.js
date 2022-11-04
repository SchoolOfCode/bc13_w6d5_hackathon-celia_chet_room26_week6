import request from 'supertest';
import app  from '../app.js'
import { pool } from '../db/index.js';
import { resetAllTables } from "../db/scripts/helpers.js";

describe('testing routing for /api/todos', function() {
  beforeEach(async () => {
    await resetAllTables();
  });
  
  afterAll(()=>{
   pool.end()
  })

  it('testing Get request', async function() {
    const response = await request(app).get('/api/todos')
    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({success:true, payload:expect.any(Array)})

  });

  it('test for new task added', async () => {
    const data = {
      task: "complete kata",
      completionDate: "2022/01/12"
    }
    const response = await request(app).post("/api/todos").set('Accept', 'application/json').send(data)
    expect(response.status).toBe(201)
    expect(response.body).toStrictEqual({success:true, payload:{id:expect.any(Number), task: "complete kata", completion_date: expect.any(String)}})
  })

  it('test for new task added throws error', async () => {
    const data = {
      task: "complete kata"
    }
    const response = await request(app).post("/api/todos").set('Accept', 'application/json').send(data)
    expect(response.status).toBe(400)
    expect(response.body).toStrictEqual({success:false, error:expect.any(String)})
  })


  it('test for delete task', async () => {
    
  const response = await request(app).delete("/api/todos/2")
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({success:true, payload:{id:2, task: "Feed the computer", completion_date: expect.any(String)}})
  })

});