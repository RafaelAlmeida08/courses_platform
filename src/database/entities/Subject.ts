import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Classe } from './Classe';
import { Professor } from './Professor';
import { Student } from './Student';

@Entity('subjects')
export class Subject {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @OneToMany( () => Professor, (professor: Professor) => professor.subject)
    professors: Professor[];

    @OneToMany( () => Student, (student: Student) => student.subject )
    students: Student[];

    @OneToMany( () => Classe, classe => classe.subject )
    classes: Classe[]
    
    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
