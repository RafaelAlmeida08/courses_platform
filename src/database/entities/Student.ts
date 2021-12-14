import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from 'uuid';
import { Classe } from "./Classe";
import { ClasseStudent } from "./ClasseStudent";
import { Subject } from "./Subject";

@Entity('students')
export class Student {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
 
    @Column()
    email: string;        

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    @OneToMany( () => ClasseStudent, classeStudent => classeStudent.student )
    classeStudents: ClasseStudent

    @ManyToOne( () => Subject, subject => subject.students )
    @JoinColumn({name: 'subject'})
    subject: Subject
    
    
    constructor() {
        if(!this.id) this.id = uuid();
    }

}
