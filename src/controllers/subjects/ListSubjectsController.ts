import { Request, Response } from "express";
import { ListSubjectsService } from "../../services/subjects/ListSubjectsService";


class ListSubjectsController {

    async execute(request: Request, response: Response) {
        const service = new ListSubjectsService();

        const list = await service.execute();

        return response.status(200).json(list);

    }

}

const listSubjectsController = new ListSubjectsController();

export { listSubjectsController }