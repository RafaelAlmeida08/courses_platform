import { getCustomRepository } from "typeorm"
import { StudentRepository } from "../../database/repositories/StudentsRepository"

class ListStudentsService {

    async execute() {
        const repository = getCustomRepository(StudentRepository);

        const list = await repository.find({
            relations: ['subject', 'classes']
        });

        return list;

    }
}

export { ListStudentsService }