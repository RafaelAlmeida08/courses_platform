import { getCustomRepository } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { Professor } from "../../database/entities/Professor";
import { ClassesRepository } from "../../database/repositories/ClassesRepository"

interface ICreateClasse{
    when: string,
    professor: Professor,
    subject: Subject
}

class CreateClasseService {
    async execute({when, professor, subject} : ICreateClasse) {

        console.log(when, professor, subject);

        const repository = getCustomRepository(ClassesRepository);

        const classe = repository.create({when, professor, subject});

        await repository.save(classe);

        return classe;

    }

}

export { CreateClasseService }