import { getCustomRepository, Timestamp } from "typeorm";
import { Subject } from "../../database/entities/Subject";
import { StudentRepository } from "../../database/repositories/StudentsRepository";

interface ICreateStudent {
    name: string,
    email: string,
    subject: Subject
}

class CreateStudentService {

    async execute({name, email, subject} : ICreateStudent) {

        const repository = getCustomRepository(StudentRepository);        

        const student = repository.create({name, email,subject});

        await repository.save(student);

        return student;

    }

}

export { CreateStudentService }