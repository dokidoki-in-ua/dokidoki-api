import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Genre } from 'src/catalog/genre/schemas';
import { Title, TitleSchema } from './title.schema';

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
