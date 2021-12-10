import { NextFunction, Request, Response } from "express";
import { ensureSubjectExists } from "../../services/subjects/EnsureSubjectExists";


const ensureFields = async (request:Request, response:Response, next: NextFunction) => {
    const { name, subject } = request.body;

    const subjectExists = await ensureSubjectExists(subject);

    if(!name) return response.status(400).json({message: 'Name Field is required!'});
    else if(!subject) return response.status(400).json({messagem: 'Subject Field is required!'});
    else if(!subjectExists) return response.status(404).json({message: 'Subject not found!'});
    else return next();    
   
};

export { ensureFields }