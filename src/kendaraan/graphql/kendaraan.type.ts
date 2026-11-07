import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class KendaraanType {

  @Field(() => Int)
  id: number;

  @Field()
  merk: string;

  @Field()
  plat_nomor: string;

  @Field(() => Int)
  tahun: number;
}