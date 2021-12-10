import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentSubjectRelation1639167279728 implements MigrationInterface {
    name = 'StudentSubjectRelation1639167279728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`Subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_b426c4f0fb0846bcc34985d1751\` FOREIGN KEY (\`Subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_b426c4f0fb0846bcc34985d1751\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`Subject\``);
    }

}
