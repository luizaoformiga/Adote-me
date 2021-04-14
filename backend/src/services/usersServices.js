import UsersModules from './modules/usersModules';

export default class AnimalServices {
  async get(data) {
    const response = data;
    return UsersModules.getUsers(response);
  }

  async post(data) {
    const response = data;
    return UsersModules.postUsers(response);
  }

  async put(data) {
    const response = data;
    return UsersModules.putUsers(response);
  }

  async patch(data) {
    const response = data;
    return UsersModules.patchUsers(response);
  }

  async delete(data) {
    const response = data;
    return UsersModules.deleteUsers(response);
  }
}