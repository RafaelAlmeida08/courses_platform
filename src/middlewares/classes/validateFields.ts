import { NextFunction, Request, Response } from "express";
import isPast from 'date-fns/isPast';
import { ensureProfessorExists } from "../../services/professors/EnsureProfessorExists";
import { ensureSubjectExists } from "../../services/subjects/EnsureSubjectExists";
import { ensureStudentExists } from "../../services/students/EnsureStudentExists";

const validateFields = async (request: Request, response: Response, next: NextFunction) => {

    let { when, professor, subject, students } = request.body;
    when = new Date(when);

    const existsProfessor = await ensureProfessorExists(professor);
    const existsSubject = await ensureSubjectExists(subject);

    const existsStudents = () => {
        students.forEach( async (student: any) => {
            let exists = await ensureStudentExists(student);
            if(!exists) return response.status(404).json({message : `Student with id ${student} not found`})                
        });        
    }
   
    existsStudents();

    if(isPast(when)) return response.status(400).json({message: `You can't create a class in the past`});
    else if(!existsProfessor) return response.status(404).json({message: `Professor not found`});
    else if(!existsSubject) return response.status(404).json({message: `Subject not found`});
    else next();
   
}

export { validateFields }