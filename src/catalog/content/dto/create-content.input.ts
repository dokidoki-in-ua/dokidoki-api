import { Field, InputType } from '@nestjs/graphql';
import { CreateTitleInput } from './created-title.input';

@InputType({
    isAbstract: true,
})
export class CreateContentInput {
    @Field(() => CreateTitleInput)
    title: CreateContentInput;

    @Field(() => [String])
    genres: string[];
}
