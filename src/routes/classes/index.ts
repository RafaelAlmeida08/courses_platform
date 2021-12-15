import { Router } from 'express';

import { listClassesController } from '../../controllers/classes/ListClassesController';
import { createClasseController } from '../../controllers/classes/CreateClasseController';

import { ensureFields } from '../../middlewares/classes/ensureFields';
import { validateFields } from '../../middlewares/classes/validateFields';

const classesRoutes = Router();

classesRoutes.post('/', ensureFields, validateFields, createClasseController.handle);
classesRoutes.get('/', listClassesController.handle);

export { classesRoutes }