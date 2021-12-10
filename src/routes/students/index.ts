import { Router } from "express"
import { createStudentController } from "../../controllers/students/CreateStudentController";
import { listStudentsController } from "../../controllers/students/ListStudentsController";

import { ensureFields } from "../../middlewares/students/ensureFields";

const studentsRoutes = Router();

studentsRoutes.get('', listStudentsController.handle);
studentsRoutes.post('', ensureFields, createStudentController.handle);

export { studentsRoutes }