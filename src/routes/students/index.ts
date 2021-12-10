import { request, response, Router } from "express"
import { listStudentsController } from "../../controllers/students/ListStudentsController";

const studentsRoutes = Router();

studentsRoutes.get('', listStudentsController.handle);

export { studentsRoutes }