import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePelangganDto } from './dto/create-pelanggan.dto';

@Injectable()
export class PelangganService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePelangganDto) {
    return this.prisma.pelanggan.create({
      data,
    });
  }

  findAll() {
    return this.prisma.pelanggan.findMany();
  }

  findOne(id: number) {
    return this.prisma.pelanggan.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.pelanggan.delete({
      where: { id },
    });
  }
}