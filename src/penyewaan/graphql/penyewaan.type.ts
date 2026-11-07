import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { PelangganType } from '../../pelanggan/graphql/pelanggan.type';
import { KendaraanType } from '../../kendaraan/graphql/kendaraan.type';

@ObjectType()
export class PenyewaanType {

  @Field(() => Int)
  id: number;

  @Field(() => Int)
  pelangganId: number;

  @Field(() => Int)
  kendaraanId: number;

  @Field()
  tanggal_sewa: Date;

  @Field(() => Float)
  total_biaya: number;

  @Field(() => PelangganType)
  pelanggan: PelangganType;

  @Field(() => KendaraanType)
  kendaraan: KendaraanType;
}