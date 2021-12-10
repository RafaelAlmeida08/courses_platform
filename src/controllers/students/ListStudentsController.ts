import { Request, Response } from "express";
import { ListStudentsService } from "../../services/students/ListStudentsService";


class ListStudentsController {

    async handle(request: Request, response: Response) {
        const service = new ListStudentsService();

        const list = await service.execute();

        return response.status(200).json(list);
        
    }

}

const listStudentsController = new ListStudentsController();

export { listStudentsController }