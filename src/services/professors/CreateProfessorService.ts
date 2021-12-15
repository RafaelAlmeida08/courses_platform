import { getCustomRepository } from "typeorm"
import { Professor } from "../../database/entities/Professor";
import { Subject } from "../../database/entities/Subject";
import { ProfessorsRepository } from "../../database/repositories/ProfessorsRepository";

interface ICreateProfessor {
    name: string,
    email: string,
    subject: Subject,
}

class CreateProfessorService {

    async execute({name, email, subject} : ICreateProfessor): Promise<Professor> {

        const repository = getCustomRepository(ProfessorsRepository);

        const professor = repository.create({name, email, subject});

        await repository.save(professor)

        return professor;

    }

}

export { CreateProfessorService }