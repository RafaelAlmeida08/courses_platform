import { EntityRepository, Repository } from 'typeorm';
import { Classe } from '../entities/Classe';

@EntityRepository(Classe)
class ClassesRepository extends Repository<Classe> {}

export { ClassesRepository }