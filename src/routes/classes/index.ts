import { Router } from 'express';

import { listClassesController } from '../../controllers/classes/ListClassesController';

const classesRoutes = Router();

classesRoutes.post('');
classesRoutes.get('/', listClassesController.handle);

export { classesRoutes }