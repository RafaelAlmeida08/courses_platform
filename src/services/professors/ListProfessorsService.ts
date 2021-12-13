import { getCustomRepository } from "typeorm"
import { ProfessorsRepository } from "../../database/repositories/ProfessorsRepository"

class ListProfessorsService {

    async execute() {
        const repository = getCustomRepository(ProfessorsRepository);

        const list = await repository.find({
            relations: ['subject']
        });

        return list;
    } 

}

export { ListProfessorsService }