import { getCustomRepository } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { ProfessorRepository } from "../../database/repositories/ProfessorRepository"

interface ICreateProfessor {
    name: string,
    subject: Subject,
}

class CreateProfessorService {

    async execute({name, subject} : ICreateProfessor) {

        const repository = getCustomRepository(ProfessorRepository);

        const professor = repository.create({name, subject});

        await repository.save(professor)

        return professor;

    }

}

export { CreateProfessorService }