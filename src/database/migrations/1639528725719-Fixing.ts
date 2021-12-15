import {MigrationInterface, QueryRunner} from "typeorm";

export class Fixing1639528725719 implements MigrationInterface {
    name = 'Fixing1639528725719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`students_classes_relation\` (\`student_id\` varchar(255) NOT NULL, \`classe_id\` varchar(255) NOT NULL, INDEX \`IDX_24b334d9306f2e57f73bfc97e8\` (\`student_id\`), INDEX \`IDX_a4a62a8bdb95d200a9e411fb78\` (\`classe_id\`), PRIMARY KEY (\`student_id\`, \`classe_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`students_classes_relation\` ADD CONSTRAINT \`FK_24b334d9306f2e57f73bfc97e8a\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`students_classes_relation\` ADD CONSTRAINT \`FK_a4a62a8bdb95d200a9e411fb78c\` FOREIGN KEY (\`classe_id\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students_classes_relation\` DROP FOREIGN KEY \`FK_a4a62a8bdb95d200a9e411fb78c\``);
        await queryRunner.query(`ALTER TABLE \`students_classes_relation\` DROP FOREIGN KEY \`FK_24b334d9306f2e57f73bfc97e8a\``);
        await queryRunner.query(`DROP INDEX \`IDX_a4a62a8bdb95d200a9e411fb78\` ON \`students_classes_relation\``);
        await queryRunner.query(`DROP INDEX \`IDX_24b334d9306f2e57f73bfc97e8\` ON \`students_classes_relation\``);
        await queryRunner.query(`DROP TABLE \`students_classes_relation\``);
    }

}
