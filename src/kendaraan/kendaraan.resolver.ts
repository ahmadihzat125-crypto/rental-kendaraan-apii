import { Resolver, Query } from '@nestjs/graphql';
import { KendaraanService } from './kendaraan.service';
import { KendaraanType } from './graphql/kendaraan.type';

@Resolver(() => KendaraanType)
export class KendaraanResolver {

  constructor(
    private kendaraanService: KendaraanService
  ) {}

  @Query(() => [KendaraanType])
  kendaraan() {
    return this.kendaraanService.findAll();
  }

}