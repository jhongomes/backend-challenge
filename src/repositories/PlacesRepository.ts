import IPlacesRepository from '../repositories/IPlacesRepository'
import ICreatePlacesDTO from '../Dtos/ICreatePlacesDTO';
import Place from "../entities/Places";
import { getRepository, Repository} from 'typeorm';



class PlacesRepository implements IPlacesRepository{
    private ormRepository: Repository<Place>;

    constructor(){
        this.ormRepository = getRepository(Place);
    }


    public async listar(): Promise<Place[]>{
        return this.ormRepository.find();
    }


    public async create({
        
        país,
        local,
        meta,
        url,
    }: ICreatePlacesDTO): Promise<Place>{

        const places = this.ormRepository.create({
            
            país,
            local,
            meta,
            url,
        });
        await this.ormRepository.save(places);

        return places;

    }/// fim create


    public async FindById(id: string): Promise<Place | undefined>{
        return this.ormRepository.findOne({
            where: { id },
        });
    }

    public async FindByLocal(local: string): Promise<Place | undefined>{
        return this.ormRepository.findOne({
            where: { local },
        });
    }

    public async save(places: Place): Promise<Place>{
        return this.ormRepository.save(places);
    }


    public async remove(places: Place): Promise<Place>{
        return this.ormRepository.remove(places);
    }




}
export default PlacesRepository;
