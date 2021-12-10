import { request, response, Router } from "express"
import { createStudentController } from "../../controllers/students/CreateStudentController";
import { listStudentsController } from "../../controllers/students/ListStudentsController";

const studentsRoutes = Router();

studentsRoutes.get('', listStudentsController.handle);
studentsRoutes.post('', createStudentController.handle);

export { studentsRoutes }