import { getCustomRepository } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { SubjectRepository } from "../../database/repositories/SubjectsRepository";

class ListSubjectsService {
    async execute(): Promise<Subject[]> {        
        const repository = getCustomRepository(SubjectRepository);

        const list = await repository.find({
            relations: ['professors', 'students']
        });

        return list;
    }
}

export { ListSubjectsService }
