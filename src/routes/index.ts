import { Router } from 'express';

import { coursesRoutes } from './courses';
import { professorsRoutes } from './professors';
import { subjectsRoutes } from './subjects';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/professors', professorsRoutes);
routes.use('/subjects', subjectsRoutes);

export { routes }