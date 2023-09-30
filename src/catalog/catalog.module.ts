import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { ContentModule } from './content/content.module';
import { GenreModule } from './genre/genre.module';

@Module({
    imports: [GenreModule, ContentModule, AnimeModule],
})
export class CatalogModule {}
