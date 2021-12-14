import { getConnection, getCustomRepository, Timestamp } from "typeorm"
import { Subject } from "../../database/entities/Subject";
import { Professor } from "../../database/entities/Professor";
import { ClassesRepository } from "../../database/repositories/ClassesRepository"
import { Student } from "../../database/entities/Student";
import { StudentRepository } from "../../database/repositories/StudentsRepository";
import { Classe } from "../../database/entities/Classe";
import { ClasseStudents } from "../../database/repositories/ClasseStudents";

interface ICreateClasse{
    when: Timestamp ,
    professor: Professor,
    subject: Subject,
    students: Object[]
}

class CreateClasseService {
    async execute({when, professor, subject, students} : ICreateClasse) {       
        const classeRepo = getCustomRepository(ClassesRepository);
        const studentRepo = getCustomRepository(StudentRepository);
        const classeStudentRepo = getCustomRepository(ClasseStudents);

        const classe = classeRepo.create({when, professor, subject});
        await classeRepo.save(classe);

        students.forEach( async (s) => {
            const stus = classeStudentRepo.create({
                classeId: classe.id, 
                studentId: `${s}`
            });
            await classeStudentRepo.save(stus)
        });

        

    }

}

export { CreateClasseService };