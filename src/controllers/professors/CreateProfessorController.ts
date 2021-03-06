import { Request, Response } from "express";
import { CreateProfessorService } from "../../services/professors/CreateProfessorService";


class CreateProfessorController {
    async handle(request: Request, response: Response) {

        const { name, email, subject } = request.body;

        const service = new CreateProfessorService();

        const professor = await service.execute({name, email, subject});

        return response.status(201).json(professor);       

    }
}

const createProfessorController = new CreateProfessorController();

export { createProfessorController }