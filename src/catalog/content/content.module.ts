import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentResolver } from './content.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Title, TitleSchema } from './schemas';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Title.name, schema: TitleSchema }]),
    GenreModule,
  ],
  providers: [ContentResolver, ContentService],
})
export class ContentModule {}
