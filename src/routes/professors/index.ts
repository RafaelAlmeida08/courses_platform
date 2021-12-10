import { Router } from 'express';

import { createProfessorController } from '../../controllers/professors/CreateProfessorController';
import { listProfessorController } from '../../controllers/professors/ListProfessorsController';

const professorsRoutes = Router();

professorsRoutes.post('' , createProfessorController.handle);
professorsRoutes.get('', listProfessorController.handle);

export { professorsRoutes }