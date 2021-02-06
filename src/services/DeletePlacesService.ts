import AppError from "../errors/AppError";
import Places from "../models/Places";
import IPlacesRepository from "../repositories/IPlacesRepository";


interface IRequest{
    id: string;
}

class DeletePlacesService{
    private placesRepository: IPlacesRepository;

    constructor(placesRespository: IPlacesRepository){
        this.placesRepository = placesRespository;
    }


    public async execute({
        id,
    }: IRequest): Promise<Places>{

    const place = await this.placesRepository.FindById(id);

    if(!place){
        throw new AppError('Place not found!', 400);
    }

    await this.placesRepository.remove(place);


    return place;
    }

}
export default DeletePlacesService;