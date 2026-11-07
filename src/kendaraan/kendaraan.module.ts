import { Module } from '@nestjs/common';
import { KendaraanController } from './kendaraan.controller';
import { KendaraanService } from './kendaraan.service';
import { KendaraanResolver } from './kendaraan.resolver';

@Module({
  controllers: [KendaraanController],
  providers: [
    KendaraanService,
    KendaraanResolver,
  ],
})
export class KendaraanModule {}