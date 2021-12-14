import {MigrationInterface, QueryRunner} from "typeorm";

export class ProfessorSubjectRelation1639428967622 implements MigrationInterface {
    name = 'ProfessorSubjectRelation1639428967622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professors\` ADD \`subject\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`professors\` ADD CONSTRAINT \`FK_6f962dee251b4d0c2dabaf752ea\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`professors\` DROP FOREIGN KEY \`FK_6f962dee251b4d0c2dabaf752ea\``);
        await queryRunner.query(`ALTER TABLE \`professors\` DROP COLUMN \`subject\``);
    }

}
