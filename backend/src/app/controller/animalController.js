import AnimalServices from '../../services/animalServices';

export default class AnimalController {
  async getController(req, res) {
    const user = req.body;
    try {
      const response = await AnimalServices.get(user);
      
      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });

      } else {
        return res.status(200).json(response); 
      }
      
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async postController(req, res) {
    const user = req.body;

    try {
      const response = await AnimalServices.post(user);
  
      if(response == null) {
        return res.status(404).json({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);  
    }
  }

  async patchController(req, res) {
    const user = req.body;
  
    try {
      const response = await AnimalServices.patch(user);

      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error); 
    }
  }

  async putController(req, res) {
    const user = req.body;
    
    try {
      const response = await AnimalServices.put(user);

      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }
  
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);  
    }
  }

  async deleteController(req, res) {
    const user = req.body;

    try {
      const response = await AnimalServices.delete(user);
      
      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });
      }
  
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error); 
    }
  }
}