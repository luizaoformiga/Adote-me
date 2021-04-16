import UsersModules from './modules/usersModules';

export default class AnimalServices {
  async get() {
    const response = await UsersModules.getUsers();
    return response;
  }

  async post() {
    const response = await UsersModules.postUsers();
    return response;
  }

  async put() {
    const response = await UsersModules.putUsers();
    return response;
  }

  async patch() {
    const response = await UsersModules.patchUsers();
    return response;
  }

  async delete() {
    const response = await UsersModules.deleteUsers();
    return response;
  }
}