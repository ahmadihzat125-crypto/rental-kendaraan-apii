import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PelangganService } from './pelanggan.service';
import { CreatePelangganDto } from './dto/create-pelanggan.dto';

@Controller('pelanggan')
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  @Post()
  create(@Body() data: CreatePelangganDto) {
    return this.pelangganService.create(data);
  }

  @Get()
  findAll() {
    return this.pelangganService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pelangganService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pelangganService.remove(+id);
  }
}