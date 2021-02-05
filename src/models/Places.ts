import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('places')
class Place {

@PrimaryGeneratedColumn('uuid')
id?: string;

@Column()
país: string;

@Column()
local: string;

@Column()
meta: Date;

@Column()
url: string;


@CreateDateColumn()
created_at: Date;

@UpdateDateColumn()
updated_at: Date;


}
export default Place;