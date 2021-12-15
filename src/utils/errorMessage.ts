import { response } from "express";

export default function errorMessage(field: string, numbers: number){

    if(numbers === 1)
        return `${field} field is required`;
    else
        return `${field} fields are required`;
   
}
