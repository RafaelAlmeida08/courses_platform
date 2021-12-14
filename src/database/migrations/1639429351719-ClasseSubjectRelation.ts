import {MigrationInterface, QueryRunner} from "typeorm";

export class ClasseSubjectRelation1639429351719 implements MigrationInterface {
    name = 'ClasseSubjectRelation1639429351719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_f1dd00404ce4035fe0e04e6adc6\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_f1dd00404ce4035fe0e04e6adc6\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP COLUMN \`subject\``);
    }

}
