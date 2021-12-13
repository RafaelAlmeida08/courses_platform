import { getCustomRepository, Timestamp } from "typeorm";
import { ClassesRepository } from "../../database/repositories/ClassesRepository";


class ListClassesService {

    async execute(){

        const repository = getCustomRepository(ClassesRepository);

        const list = repository.find();

        return list;

    }

}

export { ListClassesService }