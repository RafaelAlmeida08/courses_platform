import { EntityRepository, Repository } from 'typeorm';
import { Subject } from '../../database/entities/Subject';

@EntityRepository(Subject)
class SubjectRepository extends Repository<Subject> {}

export { SubjectRepository }