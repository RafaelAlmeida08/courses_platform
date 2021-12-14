import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentSubejctRelation1639429083356 implements MigrationInterface {
    name = 'StudentSubejctRelation1639429083356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_3468bc6c3dae2aa09fe344283c2\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_3468bc6c3dae2aa09fe344283c2\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`subject\``);
    }

}
