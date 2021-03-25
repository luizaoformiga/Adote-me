import AnimalModel from '../models/animal';

export default class AnimalController {
  async post(request, response) {
    try {
      const result = await AnimalModel.create(request.body);  
      
      if(!result) {
        return response.status(401).json({ message: "Animal not registered!"});
      }

      return response.status(201).json(result); 
    
      } catch (error) {
        return response.status(403).json(error);  
      }  
    }
        
  async get(request, response) {
    try {
      const user = await AnimalModel.find();

      if(!user) return response.status(400).json();

      return response.status(200).json(user);
    
    } catch (error) {
      return response.status(404).json(error);
    }
  }
    
  async getId(request, response) {
    try {
      const user = await AnimalModel.findById();

      if(!user) return response.status(404).json({ ERROR: "NOT FOUND" });

      return response.status(200).json(user);
                
    } catch (error) {
      return response.status(404).json(error);       
    }
  }

  async put(request, response) {
    try { 
      const { id } = request.params;
      const user = await AnimalModel.update(id, request.body);

      if(user) {
        const userUpdate = await AnimalModel.findOne(id);
        return response.json(userUpdate);
      } 

      return response.status(404).json();

    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async patch(request, response) {
    try {
      const { id } = request.params;
      const user = await AnimalModel.update(id, { finished: true });
  
      if(user) {
        const userUpdate = await AnimalModel.findOne(id);
        return response.json(userUpdate);
      }
  
      return response.status(404).json({ message: 'NOT FOUND'});
      
    } catch (error) {
      return response.status(500).json();
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const user = await AnimalModel.remove(id);
  
      if(user) {
        const userUpdate = await AnimalModel.findOne(id);
        return response.json(userUpdate);
      }
  
      return response.status(404).json({ message: 'NOT FOUND'});

    } catch (error) {
      return response.status(500).json();
    }
  }
}