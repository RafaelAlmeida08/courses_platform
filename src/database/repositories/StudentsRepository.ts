import { EntityRepository, Repository } from 'typeorm';
import { Student } from '../../database/entities/Student';

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {}

export { StudentRepository }