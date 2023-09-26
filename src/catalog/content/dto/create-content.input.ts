import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateTitleInput } from './created-title.input';
import { Genre } from 'src/catalog/genre/schemas';

@InputType({
  isAbstract: true,
})
export class CreateContentInput {
  @Field(() => CreateTitleInput)
  title: CreateContentInput;

  @Field(() => [String])
  genres: string[];
}
