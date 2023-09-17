import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeResolver } from './anime.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, Title, TitleSchema } from '../content/schemas';
import { Anime, AnimeSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anime.name, schema: AnimeSchema }]),
  ],
  providers: [AnimeResolver, AnimeService],
})
export class AnimeModule {}
