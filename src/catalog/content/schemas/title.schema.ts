import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TitleDocument = HydratedDocument<Title>;

@Schema({ timestamps: true })
@ObjectType()
export class Title {
  @Field(() => ID)
  _id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Prop({ required: true })
  @Field()
  ukrainian: string;

  @Prop({ required: true })
  @Field()
  english: string;

  @Prop({ required: true })
  @Field()
  native: string;

  @Prop({ required: true })
  @Field()
  romaji: string;
}

export const TitleSchema = SchemaFactory.createForClass(Title);
