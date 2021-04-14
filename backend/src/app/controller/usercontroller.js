import UserServices from '../../services/usersServices';

export default class UserController {
  async post(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.post(users);
      
      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }      
  }
        
  async get(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.get(users);

      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async put(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.put(users);

      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async patch(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.patch(users);
       
      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req, res) {
    const users = req.body;
    try {
      const response = await UserServices.delete(users);

      if(response == null) {
        throw new Error({ message: "NOT EXISTS" });
      }

      return res.status(200).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }
}