import AppError from "../errors/AppError";


import Places from "../entities/Places";
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
        
    const verifyPlace = await this.placesRepository.FindByLocal(local);
    
    if(verifyPlace){
        throw new AppError('location already exists', 400);
    }

    if(!país){
        throw new AppError('Fill in the country field !', 400);
    }
   
    if(!local){
        throw new AppError('Fill in the local field !', 400);
    }

    if(!meta){
        throw new AppError('Fill in the goal !', 400);
    }
    
    
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
