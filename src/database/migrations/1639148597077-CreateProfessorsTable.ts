import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfessorsTable1639148597077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'professors',
                columns: [
                    {name: 'id', type: 'varchar', isPrimary: true},
                    {name: 'name', type: 'varchar', length:'80', isUnique: false, isNullable: false},
                    {name: 'subject', type: 'varchar', isNullable: false}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('professors');
    }

}
