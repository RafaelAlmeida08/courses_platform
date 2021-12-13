import { Router } from 'express';
import { professorsRoutes } from './professors';
import { studentsRoutes } from './students';
import { subjectsRoutes } from './subjects';
import { classesRoutes } from './classes';

const routes = Router();


routes.use('/professors', professorsRoutes);
routes.use('/subjects', subjectsRoutes);
routes.use('/students', studentsRoutes);
routes.use('/classes', classesRoutes);

export { routes }