import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentSubjectRelationFixName1639167347576 implements MigrationInterface {
    name = 'StudentSubjectRelationFixName1639167347576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_b426c4f0fb0846bcc34985d1751\``);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`Subject\` \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`subject\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_3468bc6c3dae2aa09fe344283c2\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_3468bc6c3dae2aa09fe344283c2\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`subject\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`subject\` \`Subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_b426c4f0fb0846bcc34985d1751\` FOREIGN KEY (\`Subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
