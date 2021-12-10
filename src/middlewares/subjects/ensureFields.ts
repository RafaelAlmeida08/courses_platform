import { NextFunction, Request, Response } from "express";

const ensureFields = (request:Request, response:Response, next: NextFunction) => {
    const { name, description } = request.body;

    if(!name) return response.status(400).json({message: 'Name Field is required!'});
    else if(!description) return response.status(400).json({message: 'Description Fiels is required!'});
    else return next();
};

export { ensureFields }