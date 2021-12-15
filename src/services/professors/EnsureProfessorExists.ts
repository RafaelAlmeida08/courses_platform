import { getCustomRepository } from "typeorm";
import { ProfessorsRepository } from "../../database/repositories/ProfessorsRepository";

const ensureProfessorExists = async ( id: string ) => {
    const repository = getCustomRepository(ProfessorsRepository);

    const subject = await repository.findOne(id);

    return subject;

};

export { ensureProfessorExists }
