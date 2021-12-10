import { Router } from 'express';

import { coursesRoutes } from './courses';
import { professorsRoutes } from './professors';

const routes = Router();

routes.use('/courses', coursesRoutes )
routes.use('/professors', professorsRoutes )

export { routes }