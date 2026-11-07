import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PelangganModule } from './pelanggan/pelanggan.module';
import { KendaraanModule } from './kendaraan/kendaraan.module';
import { PenyewaanModule } from './penyewaan/penyewaan.module';
import { GraphqlResolver } from './graphql/graphql.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    PrismaModule,
    PelangganModule,
    KendaraanModule,
    PenyewaanModule,
  ],
  controllers: [AppController],
  providers: [
  AppService,
  GraphqlResolver
],
})
export class AppModule {}