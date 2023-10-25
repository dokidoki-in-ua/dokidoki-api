import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreModule } from '../genre/genre.module';
import { ContentResolver } from './content.resolver';
import { ContentService } from './content.service';
import { Title, TitleSchema } from './schemas';
import { Preview, PreviewSchema } from './schemas/preview.schema';
import { Synapsis, SynapsisSchema } from './schemas/synapsis.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Title.name, schema: TitleSchema },
            { name: Preview.name, schema: PreviewSchema },
            { name: Synapsis.name, schema: SynapsisSchema },
        ]),
        GenreModule,
    ],
    providers: [ContentResolver, ContentService],
})
export class ContentModule {}
