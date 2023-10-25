import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PreviewDocument = HydratedDocument<Preview>;

@Schema({ timestamps: true })
@ObjectType()
export class Preview {
    @Field(() => ID)
    _id: number;

    @Prop({ required: true })
    @Field()
    posterTall: string;

    @Prop({ required: true })
    @Field()
    posterWide: string;

    @Prop({ required: true })
    @Field()
    background: string;

    @Prop({ required: true })
    @Field()
    logo: string;

    @Prop({ required: true, type: [String] })
    @Field(() => [String])
    screenshots: string[];
}

export const PreviewSchema = SchemaFactory.createForClass(Preview);
