import { Router } from 'express';

const coursesRoutes = Router();

coursesRoutes.get('/teste' , (request, response) => {
    return response.send({message: 'Courses Router'})
})

export { coursesRoutes }