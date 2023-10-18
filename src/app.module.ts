import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';

@Module({
    imports: [
        CatalogModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
        }),
        MongooseModule.forRoot(
            'mongodb+srv://dokidoki-api:nmyLYcgZRqK8rkQ3WihTejNxtkbjk9zpZd8x@dokidoki.sde9bxd.mongodb.net/dokidokiproduction?retryWrites=true&w=majority&authSource=admin',
        ),
    ],
})
export class AppModule {}
