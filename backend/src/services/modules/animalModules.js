import database from '../database';

export default class AnimalModules {
  async postAnimal(title, type, description, category, cep, image) {
    const data = { title, type, description, category, cep, image };

    const [ id ] = await database('Animal').insert(data).returning('id'); 
    return id;    
  }
        
  async getAnimal(title, type, description, category, cep, image) {
    const data = { title, type, description, category, cep, image };

    const [ id ] = await database('Animal').find(data).returning('id');
    return id; 
  }

  async putAnimal(title, type, description, category, cep, image) {
    const data = { title, type, description, category, cep, image };

    const [ id ] = await database('Animal').update(data).returning('id');
    return id;
  }

  async patchAnimal(title, type, description, category, cep, image) {
    const data = { title, type, description, category, cep, image };

    const [ id ] = await database('Animal').findOne(data).returning('id');
    return id;
  }

  async deleteAnimal(title, type, description, category, cep, image) {
    const data = { title, type, description, category, cep, image };

    const [ id ] = await database('Animal').remove(data).returning('id');
    return id;
  }  
}