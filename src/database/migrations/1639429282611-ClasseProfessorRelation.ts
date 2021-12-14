import {MigrationInterface, QueryRunner} from "typeorm";

export class ClasseProfessorRelation1639429282611 implements MigrationInterface {
    name = 'ClasseProfessorRelation1639429282611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` ADD \`professor\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_bda283408de083f511ebc57b997\` FOREIGN KEY (\`professor\`) REFERENCES \`professors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_bda283408de083f511ebc57b997\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP COLUMN \`professor\``);
    }

}
