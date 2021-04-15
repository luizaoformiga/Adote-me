import UserServices from '../../services/usersServices';

export default class UserController {
  async post(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.postUsers(users);
      
      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }      
  }
        
  async get(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.getUsers(users);

      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async put(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.putUsers(users);

      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async patch(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.patchUsers(users);
       
      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.deleteUsers(users);

      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }
}