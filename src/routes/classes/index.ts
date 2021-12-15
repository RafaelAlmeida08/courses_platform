import { Router } from 'express';

import { listClassesController } from '../../controllers/classes/ListClassesController';
import { createClasseController } from '../../controllers/classes/CreateClasseController';
import { ensureFields } from '../../middlewares/classes/ensureFields';

const classesRoutes = Router();

classesRoutes.post('/', ensureFields, createClasseController.handle);
classesRoutes.get('/', listClassesController.handle);

export { classesRoutes }