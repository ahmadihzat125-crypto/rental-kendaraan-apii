import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PelangganType {

  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field()
  alamat: string;

  @Field()
  no_hp: string;
}