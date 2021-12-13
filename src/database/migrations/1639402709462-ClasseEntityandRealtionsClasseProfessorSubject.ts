import {MigrationInterface, QueryRunner} from "typeorm";

export class ClasseEntityandRealtionsClasseProfessorSubject1639402709462 implements MigrationInterface {
    name = 'ClasseEntityandRealtionsClasseProfessorSubject1639402709462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`classes\` (\`id\` varchar(255) NOT NULL, \`date\` timestamp NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`professor\` varchar(255) NULL, \`subject\` varchar(255) NULL, UNIQUE INDEX \`REL_bda283408de083f511ebc57b99\` (\`professor\`), UNIQUE INDEX \`REL_f1dd00404ce4035fe0e04e6adc\` (\`subject\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_bda283408de083f511ebc57b997\` FOREIGN KEY (\`professor\`) REFERENCES \`professors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_f1dd00404ce4035fe0e04e6adc6\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_f1dd00404ce4035fe0e04e6adc6\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_bda283408de083f511ebc57b997\``);
        await queryRunner.query(`DROP INDEX \`REL_f1dd00404ce4035fe0e04e6adc\` ON \`classes\``);
        await queryRunner.query(`DROP INDEX \`REL_bda283408de083f511ebc57b99\` ON \`classes\``);
        await queryRunner.query(`DROP TABLE \`classes\``);
    }

}
