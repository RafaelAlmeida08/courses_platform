import { EntityRepository, Repository } from 'typeorm';
import { Professor } from '../entities/Professor';

@EntityRepository(Professor)
class ProfessorsRepository extends Repository<Professor> {}

export { ProfessorsRepository }