import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';
import { Genre, GenreSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
    ],
    providers: [GenreResolver, GenreService],
    exports: [GenreService],
})
export class GenreModule {}
