import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovingBirthStudentDate1639169352677 implements MigrationInterface {
    name = 'RemovingBirthStudentDate1639169352677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`birthDate\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`birthDate\` timestamp NOT NULL`);
    }

}
