import UserModel from '../models/user';
import { generateToken } from '../../services/auth';

export default class userController {
  async post(request, response) {
    try {
      const result = await UserModel.create(request.body);
      const { password, ...user } = result.toObject();
      const responseUser = user;
      const token = generateToken(responseUser);

      if(!result) {
        return response.status(401).json({ message: "User not registered!" });
      }

      return response.status(200).json({ result, token }); 
    
    } catch (error) {
      return response.status(403).json(error);  
      }  
    }

  async get(request, response) {
    try {
      const user = await UserModel.find(request.body);
      return response.status(200).json(user);
  
    } catch (error) {
      return response.status(404).json(error);
    }  
  }
    
  async getId(request, response) {
    try {
      const user = await UserModel.findById(request.decoded);
      return response.status(200).json(user);
              
    } catch (error) {
      return response.status(404).json(error);       
    }  
  }

  async put(request, response) {
    try { 
      const { id } = request.params;
      const result = await UserModel.updateOne(id, request.body);
      const { password, ...user } = result.toObject();
      const responseUser = user;
      const token = generateToken(responseUser);

      if(user) {
        const userUpdate = await UserModel.findOne({ id, token });
        return response.json(userUpdate);
      } 

      return response.status(401).json({ Message: "Not registered!" });

    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async patch(request, response) {
    try {
      const { id } = request.params;
      const user = await UserModel.updateOne(id, { finished: true });
  
      if(user) {
        const userUpdate = await UserModel.findOne(id);
        return response.json(userUpdate);
      }
  
      return response.status(404).json({ message: 'NOT FOUND'});
      
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const user = await UserModel.remove(id);
  
      if(user) {
        const userUpdate = await UserModel.findOne(id);
        return response.json(userUpdate);
      }
  
      return response.status(404).json({ message: 'NOT FOUND'});

    } catch (error) {
      return response.status(500).json(error);
    }
  }
}