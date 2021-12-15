import { getCustomRepository } from "typeorm"
import { Student } from "../../database/entities/Student";
import { StudentRepository } from "../../database/repositories/StudentsRepository"

class ListStudentsService {

    async execute(): Promise<Student[]> {
        const repository = getCustomRepository(StudentRepository);

        const list = await repository.find({
            relations: ['subject', 'classes']
        });

        return list;
    }
}

export { ListStudentsService }
