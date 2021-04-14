import AnimalServices from '../../services/animalServices';

export default class AnimalController {
  async get(req, res) {
    const user = req.body;
    try {
      const response = await AnimalServices.getAnimal(user);
      
      if(response) {
        return res.status(201).json(response);

      } else {
        return res.status(404).json({ message: "NOT FOUND" }); 
      }
      
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async post(req, res) {
    const user = req.body;

    try {
      const response = await AnimalServices.postAnimal(user);
  
      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);  
    }
  }

  async patch(req, res) {
    const user = req.body;
  
    try {
      const response = await AnimalServices.patchAnimal(user);

      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }

      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error); 
    }
  }

  async put(req, res) {
    const user = req.body;
    
    try {
      const response = await AnimalServices.putAnimal(user);

      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }
  
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);  
    }
  }

  async delete(req, res) {
    const user = req.body;

    try {
      const response = await AnimalServices.deleteAnimal(user);
      
      if(response == null) {
        throw new Error({ message: "NOT FOUND" });
      }
  
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error); 
    }
  }
}