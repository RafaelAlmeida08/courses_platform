import { getCustomRepository } from "typeorm";
import { ClassesRepository } from "../../database/repositories/ClassesRepository";


class ListClassesService {

    async execute(){

        const repository = getCustomRepository(ClassesRepository);

        const list = repository.find({
            relations: ['professor', 'subject', 'students']
        }); 

        return list;

    }

}

export { ListClassesService }