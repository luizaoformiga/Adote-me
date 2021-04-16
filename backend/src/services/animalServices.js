import AnimalModules from './modules/animalModules';

export default class AnimalServices {
  async get() {
    const response = await AnimalModules.getAnimal();
    return response;
  }

  async post() {
    const response = await AnimalModules.postAnimal();
    return response;
  }

  async put() {
    const response = await AnimalModules.putAnimal();
    return response;
  }

  async patch() {
    const response = await AnimalModules.patchAnimal();
    return response;
  }

  async delete() {
    const response = await AnimalModules.deleteAnimal();
    return response;
  }
}