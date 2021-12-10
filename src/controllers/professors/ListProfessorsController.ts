import { Request, Response } from "express";
import { ListProfessorsService } from "../../services/professors/ListProfessorsService";


class ListProfessorController {

    async handle(request: Request, response: Response) {

        const service = new ListProfessorsService();

        const list = await service.execute();

        return response.status(200).json(list);

    }
    
}

const listProfessorController = new ListProfessorController();

export { listProfessorController }