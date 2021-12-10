import { Router } from 'express';

import { createProfessorController } from '../../controllers/professors/CreateProfessorController';

const professorsRoutes = Router();

professorsRoutes.post('' , createProfessorController.handle )

export { professorsRoutes }