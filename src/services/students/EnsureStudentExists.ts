import { getCustomRepository } from "typeorm";
import { StudentRepository } from "../../database/repositories/StudentsRepository";

const ensureStudentExists = async ( id: string ) => {
    const repository = getCustomRepository(StudentRepository);

    const student = await repository.findOne(id);

    return student;

};

export { ensureStudentExists }
