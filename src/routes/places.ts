import { Router } from 'express';

import PlacesController from '../controllers/PlacesControllers'


const placesRouter = Router();
const placesController = new PlacesController();


placesRouter.post('/', placesController.create);


export default placesRouter;