import { Router } from 'express';

const professorsRoutes = Router();

professorsRoutes.get('/teste' , (request, response) => {
    return response.send({message: 'Professors Router'})
})

export { professorsRoutes }