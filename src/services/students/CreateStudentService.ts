import { getCustomRepository } from "typeorm";
import { Student } from "../../database/entities/Student";
import { Subject } from "../../database/entities/Subject";
import { StudentRepository } from "../../database/repositories/StudentsRepository";

interface ICreateStudent {
    name: string,
    email: string,
    subject: Subject
}

class CreateStudentService {

    async execute({name, email, subject} : ICreateStudent): Promise<Student> {
        const repository = getCustomRepository(StudentRepository);        

        const student = repository.create({name, email,subject});

        await repository.save(student);

        return student;
    }
}

export { CreateStudentService }
