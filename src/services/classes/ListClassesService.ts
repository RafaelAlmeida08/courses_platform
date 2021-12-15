import { getCustomRepository } from "typeorm";
import { Classe } from "../../database/entities/Classe";
import { ClassesRepository } from "../../database/repositories/ClassesRepository";
import { ClasseStudents } from "../../database/repositories/ClasseStudents";


class ListClassesService {

    async execute(): Promise<Classe[]>{

        const repository = getCustomRepository(ClassesRepository);       

        // const list = await repository
        // .createQueryBuilder('classe')
        // .getMany()

        const list = repository.find({
            select: ['when', 'created_at'],
            relations: [                
                // 'professor', 
                // 'subject',
                'classeStudents',                
            ],
        });

       

        return list;

    }

}

export { ListClassesService }