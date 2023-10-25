import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SynapsisDocument = HydratedDocument<Synapsis>;

@Schema({ timestamps: true })
@ObjectType()
export class Synapsis {
    @Field(() => ID)
    _id: number;

    @Prop({ required: true })
    @Field()
    ukrainian: string;

    @Prop({ required: true })
    @Field()
    english: string;
}

export const SynapsisSchema = SchemaFactory.createForClass(Synapsis);
