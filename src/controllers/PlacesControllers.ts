import { Request, Response }  from 'express';
import Places from "../models/Places";

import PlacesRepository from "../repositories/PlacesRepository";
import CreatePlacesService from "../services/CreatePlacesService";



class PlacesController{

    public async listar(request: Request, response: Response): Promise<Response>{

        const placesRepository = new PlacesRepository();
        const places = await placesRepository.listar();

        return response.json(places);


    }


    public async create(request: Request, response: Response): Promise<Response>{
        const { país, local, meta, url } = request.body;

        const placesRepository = new PlacesRepository();
        const createPlace = new CreatePlacesService(placesRepository);

        const places = await createPlace.execute({
            país,
            local,
            meta,
            url,
        });
        return response.status(201).json(places);

    }// fim create

}
export default PlacesController;