import { PreconditionFailedException } from '@nestjs/common';
import { ObjectType, Field, Int, InterfaceType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Title, TitleSchema } from './title.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Genre } from 'src/catalog/genre/schemas';

@Schema({ timestamps: true })
@InterfaceType()
export abstract class Content {
  @Field(() => ID)
  _id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Prop({ required: true, type: TitleSchema, ref: Title.name })
  @Field(() => Title)
  title: Title;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.ObjectId, ref: Genre.name }],
  })
  @Field(() => [Genre])
  genres: Genre[] | number[];
}
