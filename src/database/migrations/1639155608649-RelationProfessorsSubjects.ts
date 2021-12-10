import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationProfessorsSubjects1639155608649 implements MigrationInterface {
    name = 'RelationProfessorsSubjects1639155608649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professors\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`professors\` ADD CONSTRAINT \`FK_95ae680b985b1bed59d45818b0e\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professors\` DROP FOREIGN KEY \`FK_95ae680b985b1bed59d45818b0e\``);
        await queryRunner.query(`ALTER TABLE \`professors\` DROP COLUMN \`subjectId\``);
    }

}
