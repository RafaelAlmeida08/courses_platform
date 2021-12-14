import { getCustomRepository } from "typeorm";
import { Classe } from "../../database/entities/Classe";
import { ClassesRepository } from "../../database/repositories/ClassesRepository";


class ListClassesService {

    async execute(): Promise<Classe[]>{

        const repository = getCustomRepository(ClassesRepository);

        const list = repository.find({
            relations: [
                'professor', 
                'subject'           
            ]
        });

        return list;

    }

}

export { ListClassesService }