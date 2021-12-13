import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Professor } from './Professor';
import { Student } from './Student';
import { Subject } from './Subject'

@Entity('classes')
export class Classe {

    @PrimaryColumn()
    id: string;
    
    @Column({type: 'timestamp'})
    date: Timestamp;

    @OneToOne( () => Professor)
    @JoinColumn({name: 'professor'})
    professor: Professor   

    @OneToOne( () => Subject )
    @JoinColumn({name: 'subject'})
    subject: Subject

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
