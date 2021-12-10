import { EntityRepository, Repository } from 'typeorm';
import { Professor } from '../../database/entities/Professor';

@EntityRepository(Professor)
class ProfessorRepository extends Repository<Professor> {}

export { ProfessorRepository }