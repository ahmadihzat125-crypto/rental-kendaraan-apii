import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Injectable()
export class PenyewaanService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePenyewaanDto) {
    return this.prisma.penyewaan.create({
      data,
    });
  }

  findAll() {
    return this.prisma.penyewaan.findMany({
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.penyewaan.findUnique({
      where: { id },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.penyewaan.delete({
      where: { id },
    });
  }
}