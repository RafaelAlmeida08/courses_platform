import { Router } from 'express';

import { createProfessorController } from '../../controllers/professors/CreateProfessorController';
import { listProfessorController } from '../../controllers/professors/ListProfessorsController';
import { ensureFields } from '../../middlewares/professors/ensureFields';

const professorsRoutes = Router();

professorsRoutes.post('' , ensureFields, createProfessorController.handle);
professorsRoutes.get('', listProfessorController.handle);

export { professorsRoutes }