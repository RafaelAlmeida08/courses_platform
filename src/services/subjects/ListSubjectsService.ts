import { getCustomRepository } from "typeorm"
import { SubjectRepository } from "../../database/repositories/SubjectRepository"


class ListSubjectsService {

    async execute() {        
        const repository = getCustomRepository(SubjectRepository);

        const list = await repository.find({
            relations: ['professors', 'students']
        });

        return list;
    }

}

export { ListSubjectsService }