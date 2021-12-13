import {MigrationInterface, QueryRunner} from "typeorm";

export class ChaningDateNameToWhen1639405154000 implements MigrationInterface {
    name = 'ChaningDateNameToWhen1639405154000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` CHANGE \`date\` \`when\` timestamp NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` CHANGE \`when\` \`date\` timestamp NOT NULL`);
    }

}
