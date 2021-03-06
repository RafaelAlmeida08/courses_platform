import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from 'uuid';
import { Classe } from "./Classe";
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

    @ManyToMany( () => Classe, classe => classe.students )
    @JoinTable({
        name: 'students_classes_relation',
        joinColumn: {
            name: 'student_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'classe_id', 
            referencedColumnName: 'id'
        }
    })
    classes: Classe[];

    @ManyToOne( () => Subject, subject => subject.students )
    @JoinColumn({name: 'subject'})
    subject: Subject
    
    
    constructor() {
        if(!this.id) this.id = uuid();
    }

}
