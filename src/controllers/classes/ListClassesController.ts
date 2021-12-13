import { Request, Response } from "express";
import { ListClassesService } from "../../services/classes/ListClassesService";


class ListClassesController {

    async handle(request: Request, response: Response) {

        const service = new ListClassesService();

        const list = await service.execute();

        return response.status(200).json(list);

    }

}

const listClassesController = new ListClassesController();

export { listClassesController }