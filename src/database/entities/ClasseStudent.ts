import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Classe } from './Classe';
import { Student } from './Student';

@Entity('classe_students')
export class ClasseStudent {

    @PrimaryColumn()
    id: string;
     
    @Column()
    classeId: string; 

    @Column()
    studentId: string;

    @ManyToOne( () => Classe, classe => classe.classeStudents )
    @JoinColumn()
    classe: Classe

    @ManyToOne( () => Student, student => student.classeStudents )
    student: Student[];
    

    constructor() {
        if(!this.id) this.id = uuid(); 
    }

}
