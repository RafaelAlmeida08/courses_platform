import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from 'uuid';
import { Subject } from "./Subject";

@Entity('students')
export class Student {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({type: 'timestamp'})
    birthDate: Timestamp;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    @ManyToOne( () => Subject, (subject : Subject) => subject.students )
    @JoinColumn({name: 'subject'})
    subject: Subject

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
