import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKendaraanDto } from './dto/create-kendaraan.dto';

@Injectable()
export class KendaraanService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateKendaraanDto) {
    return this.prisma.kendaraan.create({
      data,
    });
  }

  findAll() {
    return this.prisma.kendaraan.findMany();
  }

  findOne(id: number) {
    return this.prisma.kendaraan.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.kendaraan.delete({
      where: { id },
    });
  }
}