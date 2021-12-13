import { Request, Response } from "express";
import { CreateClasseService } from "../../services/classes/CreateClasseService";


class CreateClasseController {
    async handle(request: Request, response: Response) {

        const { when, professor, subject, students } = request.body;

        console.log(request.body);

        const service = new CreateClasseService();

        const list = await service.execute({when, professor, subject, students});

        return response.status(201).json(list);

    }

}

export const createClasseController = new CreateClasseController();

