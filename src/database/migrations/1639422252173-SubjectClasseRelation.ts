import {MigrationInterface, QueryRunner} from "typeorm";

export class SubjectClasseRelation1639422252173 implements MigrationInterface {
    name = 'SubjectClasseRelation1639422252173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`subject\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`professors\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`subject\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`classes\` (\`id\` varchar(255) NOT NULL, \`when\` timestamp NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`professor\` varchar(255) NULL, \`subject\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`students_classes_classes\` (\`studentsId\` varchar(255) NOT NULL, \`classesId\` varchar(255) NOT NULL, INDEX \`IDX_d5cce8558584c40f29af60f58b\` (\`studentsId\`), INDEX \`IDX_cb45ea2418e16cc6bb1a338140\` (\`classesId\`), PRIMARY KEY (\`studentsId\`, \`classesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_3468bc6c3dae2aa09fe344283c2\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`professors\` ADD CONSTRAINT \`FK_6f962dee251b4d0c2dabaf752ea\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_bda283408de083f511ebc57b997\` FOREIGN KEY (\`professor\`) REFERENCES \`professors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_f1dd00404ce4035fe0e04e6adc6\` FOREIGN KEY (\`subject\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` ADD CONSTRAINT \`FK_d5cce8558584c40f29af60f58b7\` FOREIGN KEY (\`studentsId\`) REFERENCES \`students\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` ADD CONSTRAINT \`FK_cb45ea2418e16cc6bb1a3381400\` FOREIGN KEY (\`classesId\`) REFERENCES \`classes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` DROP FOREIGN KEY \`FK_cb45ea2418e16cc6bb1a3381400\``);
        await queryRunner.query(`ALTER TABLE \`students_classes_classes\` DROP FOREIGN KEY \`FK_d5cce8558584c40f29af60f58b7\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_f1dd00404ce4035fe0e04e6adc6\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_bda283408de083f511ebc57b997\``);
        await queryRunner.query(`ALTER TABLE \`professors\` DROP FOREIGN KEY \`FK_6f962dee251b4d0c2dabaf752ea\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_3468bc6c3dae2aa09fe344283c2\``);
        await queryRunner.query(`DROP INDEX \`IDX_cb45ea2418e16cc6bb1a338140\` ON \`students_classes_classes\``);
        await queryRunner.query(`DROP INDEX \`IDX_d5cce8558584c40f29af60f58b\` ON \`students_classes_classes\``);
        await queryRunner.query(`DROP TABLE \`students_classes_classes\``);
        await queryRunner.query(`DROP TABLE \`classes\``);
        await queryRunner.query(`DROP TABLE \`professors\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
        await queryRunner.query(`DROP TABLE \`students\``);
    }

}
