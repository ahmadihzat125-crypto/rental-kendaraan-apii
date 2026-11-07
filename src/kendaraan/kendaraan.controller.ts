import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { KendaraanService } from './kendaraan.service';
import { CreateKendaraanDto } from './dto/create-kendaraan.dto';

@Controller('kendaraan')
export class KendaraanController {
  constructor(private readonly kendaraanService: KendaraanService) {}

  @Post()
  create(@Body() data: CreateKendaraanDto) {
    return this.kendaraanService.create(data);
  }

  @Get()
  findAll() {
    return this.kendaraanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kendaraanService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kendaraanService.remove(+id);
  }
}