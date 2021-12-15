import { getCustomRepository } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { SubjectRepository } from "../../database/repositories/SubjectsRepository"

interface ICreateSubject {
    name: string, 
    description: string
}

class CreateSubjectService {

    async execute({name, description} : ICreateSubject): Promise<Subject> {

        const repository = getCustomRepository(SubjectRepository);

        const subject = repository.create({name, description});

        await repository.save(subject);

        return subject;

    }

    

}

export { CreateSubjectService }