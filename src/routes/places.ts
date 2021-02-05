import { Router } from 'express';

import PlacesController from '../controllers/PlacesControllers'


const placesRouter = Router();
const placesController = new PlacesController();

placesRouter.get('/', placesController.listar);
placesRouter.post('/', placesController.create);
placesRouter.put('/:id', placesController.Update);
placesRouter.delete('/:id', placesController.Delete);



export default placesRouter;