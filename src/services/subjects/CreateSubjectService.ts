import { getCustomRepository } from "typeorm"
import { SubjectRepository } from "../../database/repositories/SubjectRepository"

interface ICreateSubject {
    name: string, 
    description: string
}

class CreateSubjectService {

    async execute({name, description} : ICreateSubject) {

        const repository = getCustomRepository(SubjectRepository);

        const subject = repository.create({name, description});

        await repository.save(subject);

        return subject;

    }

    

}

export { CreateSubjectService }