import { Field, InputType } from '@nestjs/graphql';
import { CreatePreviewInput } from './create-preview.input';
import { CreateSynapsisInput } from './create-synapsis.input';
import { CreateTitleInput } from './created-title.input';

@InputType({
    isAbstract: true,
})
export class CreateContentInput {
    @Field(() => CreateTitleInput)
    title: CreateContentInput;

    @Field(() => [String])
    genres: string[];

    @Field(() => String)
    alias: string;

    @Field(() => CreatePreviewInput)
    preview: CreatePreviewInput;

    @Field(() => CreateSynapsisInput)
    synapsis: CreateSynapsisInput;
}
