import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { studentsRoutes } from '../../routes/students';
import { Professor } from './Professor';
import { Student } from './Student';
import { Subject } from './Subject'

@Entity('classes')
export class Classe {

    @PrimaryColumn()
    id: string;
    
    @Column({type: 'timestamp'})
    when: Timestamp;

    @ManyToOne( () => Professor)
    @JoinColumn({name: 'professor'})
    professor: Professor   

    @ManyToOne( () => Subject )
    @JoinColumn({name: 'subject'})
    subject: Subject    

    @ManyToMany( () => Student, student => student.classes )
    students: Student[]

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
