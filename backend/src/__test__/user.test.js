import request from 'supertest';
import app from '../app/app';

describe('insert', () => {
  it('Should insert a doc into collection', async() => {
    const response = await request(app).post('/home/menu')
      .json({ username: "anacristina123", password: "9876543" });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('Message POST'); 
  })

  it('Should search a doc into collection', async() => {
    const response = await request(app).get('/home');
    
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('Message GET');
  })

  it('Should put a doc into collection', async() => {
    const response = await request(app).put('/home/menu/:id')
      .json({ username: "luizaoformiga", password: "123456" }); 

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('Message PUT');  
  })

  it('Should pacth a doc into collection', async() => {
    const response = await request(app).patch('/home/menu/:id')
      .json({ username: "", password: "" }); 

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('Message PATCH');  
  })

  it('Should delete a doc into collection', async() => {
    const response = await request(app).delete('/home/menu/:id')
      .json({ username: "luizaoformiga", password: "123456" }); 

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('Message DELETE');  
  })
})