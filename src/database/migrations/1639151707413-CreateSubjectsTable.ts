import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSubjectsTable1639151707413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'subjects',
                columns: [
                    {name: 'id', type: 'varchar', isPrimary: true},
                    {name: 'name', type: 'varchar', length:'80', isNullable: false},
                    {name: 'description', type: 'varchar', isNullable: false},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subjects');
    }

}
