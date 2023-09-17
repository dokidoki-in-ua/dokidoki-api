import { Module } from '@nestjs/common';
import { GenreModule } from './genre/genre.module';
import { ContentModule } from './content/content.module';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [GenreModule, ContentModule, AnimeModule],
})
export class CatalogModule {}
