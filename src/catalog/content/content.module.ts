import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreModule } from '../genre/genre.module';
import { ContentResolver } from './content.resolver';
import { ContentService } from './content.service';
import { Title, TitleSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Title.name, schema: TitleSchema }]),
        GenreModule,
    ],
    providers: [ContentResolver, ContentService],
})
export class ContentModule {}
