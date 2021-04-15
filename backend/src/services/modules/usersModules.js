import database from '../../database/index';

export default class UsersModules {
  async postUsers(username, email, image, pasword) {
    const data = { username, email, image, pasword }; 
    const response = await database('Users').insert(data).returning('id'); 
    return response;    
  }
        
  async getUsers(username, email, image, pasword) {
    const data = { username, email, image, pasword };
    const response = await database('Users').find(data).returning('id');
    return response; 
  }

  async putUsers(username, email, image, pasword) {
    const data = { username, email, image, pasword };
    const response = await database('Users').update(data).returning('id');
    return response;
  }

  async patchUsers(username, email, image, pasword) {
    const data = { username, email, image, pasword };
    const response = await database('Users').findOne(data).returning('id');
    return response;
  }

  async deleteUsers(username, email, image, pasword) {
    const data = { username, email, image, pasword };
    const response = await database('Users').remove(data).returning('id');
    return response;
  }  
}