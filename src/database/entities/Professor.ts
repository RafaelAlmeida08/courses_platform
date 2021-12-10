import {Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity('professors')
export class Professor {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    subject: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Timestamp;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
