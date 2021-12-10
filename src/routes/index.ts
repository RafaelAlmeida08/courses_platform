import { Router } from 'express';
import { professorsRoutes } from './professors';
import { studentsRoutes } from './students';
import { subjectsRoutes } from './subjects';

const routes = Router();


routes.use('/professors', professorsRoutes);
routes.use('/subjects', subjectsRoutes);
routes.use('/students', studentsRoutes)

export { routes }