import {MigrationInterface, QueryRunner} from "typeorm";

export class FixingRelations1639409448095 implements MigrationInterface {
    name = 'FixingRelations1639409448095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`students_classes_classes\` (\`studentsId\` varchar(255) NOT NULL, \`classesId\` varchar(255) NOT NULL, INDEX \`IDX_d5cce8558584c40f29af60f58b\` (\`studentsId\`), INDEX \`IDX_cb45ea2418e16cc6bb1a338140\` (\`classesId\`), PRIMARY KEY (\`studentsId\`, \`classesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` ADD CONSTRAINT \`FK_d5cce8558584c40f29af60f58b7\` FOREIGN KEY (\`studentsId\`) REFERENCES \`students\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` ADD CONSTRAINT \`FK_cb45ea2418e16cc6bb1a3381400\` FOREIGN KEY (\`classesId\`) REFERENCES \`classes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` DROP FOREIGN KEY \`FK_cb45ea2418e16cc6bb1a3381400\``);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` DROP FOREIGN KEY \`FK_d5cce8558584c40f29af60f58b7\``);
        await queryRunner.query(`DROP INDEX \`IDX_cb45ea2418e16cc6bb1a338140\` ON \`students_classes_classes\``);
        await queryRunner.query(`DROP INDEX \`IDX_d5cce8558584c40f29af60f58b\` ON \`students_classes_classes\``);
        await queryRunner.query(`DROP TABLE \`students_classes_classes\``);
    }

}
