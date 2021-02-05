import AppError from '../errors/AppError';
import Places from '../models/Places';
import IPlacesRepository from '../repositories/IPlacesRepository';


interface IRequest{
    id: string;
    local: string;
    meta: Date;
}

class UpdatePlacesService {
    private placesRespository: IPlacesRepository;

    constructor(placesRepository: IPlacesRepository){
        this.placesRespository = placesRepository;
    }


    public async execute({
        id,
        local,
        meta,
    }: IRequest): Promise<Places>{
    
    const place = await this.placesRespository.FindById(id);

    
    
     if(!place){
        throw new AppError('Place not found!', 400);  
     }

     if(local !== place?.local){
            
     const verifyPlace = await this.placesRespository.FindByLocal(local);
        
     if(verifyPlace){
          throw new AppError('Location already exists', 400);
     }
     }

     place.local = local;
     place.meta = meta;

     await this.placesRespository.save(place);

     return place;
    }
}
export default UpdatePlacesService;