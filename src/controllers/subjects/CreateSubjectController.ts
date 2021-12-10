import { Request, Response } from "express";
import { CreateSubjectService } from "../../services/subjects/CreateSubjectService";


class CreateSubjectController{

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const service = new CreateSubjectService();

        const subject = await service.execute({name, description});

        return response.status(201).json(subject);

    }

}

const createSubjectController = new CreateSubjectController();

export { createSubjectController }