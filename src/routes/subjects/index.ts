import { Router } from 'express';

import { createSubjectController } from '../../controllers/subjects/CreateSubjectController';
import { listSubjectsController } from '../../controllers/subjects/ListSubjectsController';
import { ensureFields } from '../../middlewares/subjects/ensureFields';

const subjectsRoutes = Router();

subjectsRoutes.post('' , ensureFields, createSubjectController.handle)
subjectsRoutes.get('', listSubjectsController.execute);

export { subjectsRoutes }