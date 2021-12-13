import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SubjectRepository } from "../../database/repositories/SubjectsRepository";


const ensureSubjectExists = async ( id: string ) => {

    const repository = getCustomRepository(SubjectRepository);

    const subject = await repository.findOne(id);

    return subject;

};

export { ensureSubjectExists }