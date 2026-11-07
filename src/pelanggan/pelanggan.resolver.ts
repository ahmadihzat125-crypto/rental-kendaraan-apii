import { Resolver, Query } from '@nestjs/graphql';
import { PelangganService } from './pelanggan.service';
import { PelangganType } from './graphql/pelanggan.type';

@Resolver(() => PelangganType)
export class PelangganResolver {

  constructor(
    private pelangganService: PelangganService
  ) {}

  @Query(() => [PelangganType])
  pelanggan() {
    return this.pelangganService.findAll();
  }

}