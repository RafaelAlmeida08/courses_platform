import { Router } from 'express';

import { listClassesController } from '../../controllers/classes/ListClassesController';
import { createClasseController } from '../../controllers/classes/CreateClasseController';

const classesRoutes = Router();

classesRoutes.post('/', createClasseController.handle);
classesRoutes.get('/', listClassesController.handle);

export { classesRoutes }