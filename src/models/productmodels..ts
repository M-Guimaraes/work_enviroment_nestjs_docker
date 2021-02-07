import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

}
