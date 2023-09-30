import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeResolver } from './anime.resolver';
import { AnimeService } from './anime.service';
import { Anime, AnimeSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Anime.name, schema: AnimeSchema }]),
    ],
    providers: [AnimeResolver, AnimeService],
})
export class AnimeModule {}
