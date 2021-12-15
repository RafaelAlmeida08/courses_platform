import { getCustomRepository } from "typeorm"
import { Professor } from "../../database/entities/Professor";
import { ProfessorsRepository } from "../../database/repositories/ProfessorsRepository"

class ListProfessorsService {

    async execute(): Promise<Professor[]> {
        const repository = getCustomRepository(ProfessorsRepository);

        const list = await repository.find({
            relations: ['subject', 'classes']
        });

        return list;
    } 
}

export { ListProfessorsService }
