import { ObjectType } from '@nestjs/graphql';
import { SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Content } from 'src/catalog/content/schemas';

export type AnimeDocument = HydratedDocument<Anime>;

@ObjectType({
    implements: () => [Content],
})
export class Anime extends Content {}

export const AnimeSchema = SchemaFactory.createForClass(Anime);
