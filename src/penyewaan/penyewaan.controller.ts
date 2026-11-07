import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Controller('penyewaan')
export class PenyewaanController {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  @Post()
  create(@Body() data: CreatePenyewaanDto) {
    return this.penyewaanService.create(data);
  }

  @Get()
  findAll() {
    return this.penyewaanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penyewaanService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penyewaanService.remove(+id);
  }
}