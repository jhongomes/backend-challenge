import ICreatePlacesDTO from '../Dtos/ICreatePlacesDTO';
import Places from '../models/Places';


export default interface IPlacesRepository{

    listar(): Promise<Places[]>;
    create(createPlacesDTO: ICreatePlacesDTO): Promise<Places>;
    FindByLocal(local: string): Promise< Places | undefined>;
    FindById(id: string): Promise<Places | undefined>;
    save(places: Places): Promise<Places>;
    remove(places: Places): Promise<Places>;
    
   
}
