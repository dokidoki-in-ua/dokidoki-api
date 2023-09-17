import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { type } from 'os';
import { Content } from 'src/catalog/content/schemas';

export type AnimeDocument = HydratedDocument<Anime>;

@ObjectType({
  implements: () => [Content],
})
export class Anime extends Content {}

export const AnimeSchema = SchemaFactory.createForClass(Anime);
