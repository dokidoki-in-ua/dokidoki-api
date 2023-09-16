import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GenreDocument = HydratedDocument<Genre>;

@Schema({ timestamps: true })
@ObjectType()
export class Genre {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  ukrainian: string;

  @Prop({ required: true })
  @Field()
  english: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
