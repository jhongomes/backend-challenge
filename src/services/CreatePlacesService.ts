import AppError from "../errors/AppError";


import Places from "../models/Places";
import IPlacesRepository from "../repositories/IPlacesRepository";



interface IRequest {
    país: string;
    local: string;
    meta: Date;
    url: string;
}

class CreatePlacesService {
    private placesRepository: IPlacesRepository;

    constructor(placesRepository: IPlacesRepository){
        this.placesRepository = placesRepository;
    }

    public async execute({
    
        país,
        local,
        meta,
        url,
    }: IRequest): Promise<Places>{

   
    
    const place = await this.placesRepository.create({
        país,
        local,
        meta,
        url,
    });
    return place;

    }
}


export default CreatePlacesService;
