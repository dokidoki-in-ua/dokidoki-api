import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
  ],
  providers: [GenreResolver, GenreService],
})
export class GenreModule {}
