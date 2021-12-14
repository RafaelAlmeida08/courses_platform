import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Classe } from './Classe';
import { Subject } from './Subject';

@Entity('professors')
export class Professor {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
        
    @ManyToOne( () =>  Subject, subject => subject.professors)
    @JoinColumn({name: 'subject'})
    subject: Subject  
    
    @OneToMany( () => Classe, classe => classe.professor )
    classes: Classe[];

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
