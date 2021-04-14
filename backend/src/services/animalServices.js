import AnimalModules from './modules/animalModules';

export default class AnimalServices {
  async get(data) {
    const response = data;
    return AnimalModules.getAnimal(response);
  }

  async post(data) {
    const response = data;
    return AnimalModules.postAnimal(response);
  }

  async put(data) {
    const response = data;
    return AnimalModules.putAnimal(response);
  }

  async patch(data) {
    const response = data;
    return AnimalModules.patchAnimal(response);
  }

  async delete(data) {
    const response = data;
    return AnimalModules.deleteAnimal(response);
  }
}