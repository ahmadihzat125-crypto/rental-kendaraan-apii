import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class GraphqlResolver {

  @Query(() => String)
  hello(): string {
    return 'Rental Kendaraan API GraphQL Berhasil';
  }

}