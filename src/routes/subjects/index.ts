import { Router } from 'express';

import { createSubjectController } from '../../controllers/subjects/CreateSubjectController';

const subjectsRoutes = Router();

subjectsRoutes.post('' , createSubjectController.handle )

export { subjectsRoutes }