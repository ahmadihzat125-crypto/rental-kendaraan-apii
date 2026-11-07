import { Module } from '@nestjs/common';
import { PelangganController } from './pelanggan.controller';
import { PelangganService } from './pelanggan.service';
import { PelangganResolver } from './pelanggan.resolver';

@Module({
  controllers: [PelangganController],
  providers: [
    PelangganService,
    PelangganResolver,
  ],
})
export class PelangganModule {}