import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Subject } from './Subject';

@Entity('professors')
export class Professor {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
        
    @ManyToOne(type => Subject, professors => Professor)
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
