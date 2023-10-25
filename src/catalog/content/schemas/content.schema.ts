import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Genre } from 'src/catalog/genre/schemas';
import { Preview, PreviewSchema } from './preview.schema';
import { Synapsis, SynapsisSchema } from './synapsis.schema';
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

    @Prop({ required: true })
    @Field()
    alias: string;

    @Prop({ required: true, type: PreviewSchema, ref: Preview.name })
    @Field(() => Preview)
    preview: Preview;

    @Prop({ required: true, type: SynapsisSchema, ref: Synapsis.name })
    @Field(() => Synapsis)
    synapsis: Synapsis;
}
