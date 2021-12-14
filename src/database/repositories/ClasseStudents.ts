import { EntityRepository, Repository } from 'typeorm';
import { ClasseStudent } from '../entities/ClasseStudent';

@EntityRepository(ClasseStudent)
class ClasseStudents extends Repository<ClasseStudent> {}

export { ClasseStudents }