import { getConnection, getCustomRepository, Timestamp } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { Professor } from "../../database/entities/Professor";
import { Classe } from "../../database/entities/Classe";
import { ClassesRepository } from "../../database/repositories/ClassesRepository";
import { Student } from "../../database/entities/Student";


interface ICreateClasse{
    when: Timestamp ,
    professor: Professor,
    subject: Subject,
    students: Student[]
}

class CreateClasseService {
    async execute({when, professor, subject, students} : ICreateClasse): Promise<Classe> {  
        const classeRepo = getCustomRepository(ClassesRepository); 
        const classe = classeRepo.create({when, professor, subject});
        await classeRepo.save(classe);

        students.forEach( async (s) => {
            await getConnection()
            .createQueryBuilder()
            .insert()
            .into('students_classes_relation')
            .values({
                classe_id: classe.id, 
                student_id: `${s}`
            })
            .execute()
        });

        return classe;
    }
}

export { CreateClasseService };
