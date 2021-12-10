import { getCustomRepository } from "typeorm"
import { ProfessorRepository } from "../../database/repositories/ProfessorRepository"


class ListProfessorsService {

    async execute() {
        const repository = getCustomRepository(ProfessorRepository);

        const list = await repository.find({
            relations: ['subject']
        });

        return list;
    }

}

export { ListProfessorsService }