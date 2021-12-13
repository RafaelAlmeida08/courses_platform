import { getCustomRepository } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { Professor } from "../../database/entities/Professor";
import { ClassesRepository } from "../../database/repositories/ClassesRepository"
import { Student } from "../../database/entities/Student";

interface ICreateClasse{
    when: string,
    professor: Professor,
    subject: Subject,
    students: Student[]
}

class CreateClasseService {
    async execute({when, professor, subject, students} : ICreateClasse) {

        // console.log(when, professor, subject, students);

        const repository = getCustomRepository(ClassesRepository);

        const classe = repository.create({when, professor, subject});

        const newClasse = await repository.save(classe);


        console.log(newClasse);

        // return classe;

    }

}

export { CreateClasseService };