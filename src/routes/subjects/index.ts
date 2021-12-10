import { Router } from 'express';

import { createSubjectController } from '../../controllers/subjects/CreateSubjectController';
import { listSubjectsController } from '../../controllers/subjects/ListSubjectsController';

const subjectsRoutes = Router();

subjectsRoutes.post('' , createSubjectController.handle)
subjectsRoutes.get('', listSubjectsController.execute);

export { subjectsRoutes }