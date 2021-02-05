import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePlaces1612548457968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
              
            name:'places',
            columns:[
                {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',

                },
                {
                    name: 'país',
                    type:  'varchar',
                  
                },
                {
                    name: 'local',
                    type: 'varchar',
                },
                {
                    name:  'meta',
                    type: 'date',
                },
                {
                    name: 'url',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('places');
    }

}
