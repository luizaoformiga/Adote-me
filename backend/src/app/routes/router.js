import { Router } from 'express';
import UserController from '../controller/usercontroller';
import AnimalController from '../controller/animalController';

const router = new Router();

const routerUser = new UserController();
router.get('/home', routerUser.get);
router.get('/home/:id', routerUser.getId);
router.post('/home/menu', routerUser.post);
router.put('/home/menu/:id', routerUser.put);
router.patch('/home/menu/:id', routerUser.patch);
router.delete('/home/menu/:id', routerUser.delete);

const routerAnimal = new AnimalController();
router.get('/home/perfil', routerAnimal.get);
router.post('/home/perfil', routerAnimal.post);
router.put('/home/perfil/sign/:id', routerAnimal.put);
router.patch('/home/perfil/sign/:id', routerAnimal.patch);
router.delete('home/perfil/:id', routerAnimal.delete);

export default router;