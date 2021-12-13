import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
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

    @ManyToMany( () => Classe)
    @JoinTable({name: 'students_classes_classes'})
    classes: Classe[];

    @ManyToOne( () => Subject, (subject : Subject) => subject.students )
    @JoinColumn({name: 'subject'})
    subject: Subject
    
    constructor() {
        if(!this.id) this.id = uuid();
    }

}
