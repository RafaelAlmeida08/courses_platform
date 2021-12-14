import {MigrationInterface, QueryRunner} from "typeorm";

export class LinkTableClasseStudent1639491862408 implements MigrationInterface {
    name = 'LinkTableClasseStudent1639491862408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`classe_students\` (\`id\` varchar(255) NOT NULL, \`classeId\` varchar(255) NOT NULL, \`studentId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`classe_students\` ADD CONSTRAINT \`FK_324a5fdb4fa3f5208b4d223674c\` FOREIGN KEY (\`classeId\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`classe_students\` ADD CONSTRAINT \`FK_dc8f8649b4bcea206755a9ae55a\` FOREIGN KEY (\`studentId\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classe_students\` DROP FOREIGN KEY \`FK_dc8f8649b4bcea206755a9ae55a\``);
        await queryRunner.query(`ALTER TABLE \`classe_students\` DROP FOREIGN KEY \`FK_324a5fdb4fa3f5208b4d223674c\``);
        await queryRunner.query(`DROP TABLE \`classe_students\``);
    }

}
