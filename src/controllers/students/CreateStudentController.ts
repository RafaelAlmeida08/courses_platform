import { Request, Response } from "express";
import { CreateStudentService } from "../../services/students/CreateStudentService";


class CreateStudentController {

    async handle( request: Request, response: Response ) {
        const { name, email, subject } = request.body;
        const service = new CreateStudentService();

        const student = await service.execute({name, email, subject});

        return response.status(201).json(student);
    }

}

const createStudentController = new CreateStudentController();

export { createStudentController }