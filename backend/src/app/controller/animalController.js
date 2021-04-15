import AnimalServices from '../../services/animalServices';
//import generator from '../../helpers/generator';

export default class AnimalController {
  async get(req, res) {
    const user = req.body;
    try {
      const response = await AnimalServices.getAnimal(user);
      
      if(response == null) {
        return res.status(400).json({ message: "NOT FOUND" });

      } else {
        return res.status(200).json(response); 
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
        return res.status(404).json({ message: "NOT FOUND" });
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
        return res.status(400).json({ message: "NOT FOUND" });
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
        return res.status(400).json({ message: "NOT FOUND" });
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
        return res.status(400).json({ message: "NOT FOUND" });
      }
  
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error); 
    }
  }
}