import {  NextFunction, Request, Response } from "express";
import errorMessage from "../../utils/errorMessage";



const ensureFields = (request: Request, response: Response, next: NextFunction) => {
    const { when, professor, subject, students } = request.body;

    if(!when) return response.status(400).json({message: 'Date field is required'});
    else if(!professor) return response.status(400).json({message: errorMessage('Professor', 1)});
    else if(!subject) return response.status(400).json({message: errorMessage('Subject', 1)});
    else if(!students) return response.status(400).json({message: errorMessage('Students', 2)});
    else return next();
};

export { ensureFields }