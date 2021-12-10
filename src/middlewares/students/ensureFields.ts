import { NextFunction, Request, Response } from "express";
import { ensureSubjectExists } from "../../services/subjects/EnsureSubjectExists";
import * as EmailValidator from 'email-validator';


const ensureFields = async (request:Request, response:Response, next: NextFunction) => {
    const { name, email, subject } = request.body;

    if(!name) return response.status(400).json({message: 'Name Field is required!'});
    else if(!email) return response.status(400).json({messagem: 'Email Field is required!'});
    else if(!EmailValidator.validate(email)) return response.status(400).json({messagem: 'Incorrect Email sintax'});
    else if(!subject) return response.status(400).json({messagem: 'Subject Field is required!'});

    const subjectExists = await ensureSubjectExists(subject);

    if(!subjectExists) return response.status(404).json({message: 'Subject not found!'});
    else return next();  
   
};

export { ensureFields }