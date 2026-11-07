import { Resolver, Query } from '@nestjs/graphql';
import { PenyewaanService } from './penyewaan.service';
import { PenyewaanType } from './graphql/penyewaan.type';

@Resolver(() => PenyewaanType)
export class PenyewaanResolver {

  constructor(
    private penyewaanService: PenyewaanService
  ) {}

  @Query(() => [PenyewaanType])
  penyewaan() {
    return this.penyewaanService.findAll();
  }

}