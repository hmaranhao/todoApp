import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTodo1658981554251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "todos",
                columns: [
                    {
                        name: "_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "text",
                    },
                    {
                        name: "status",
                        type: "int",
                    },
                    {
                        name: "createdAt",
                        type: "timestamptz",
                        default: "now()"
                    },
                    {
                        name: "startedAt",
                        type: "timestamptz",
                    },
                    {
                        name: "finishedAt",
                        type: "timestamptz",
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("todos")
    }

}
