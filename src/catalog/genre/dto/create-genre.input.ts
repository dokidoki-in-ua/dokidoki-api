import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => String, { description: 'Ukainain genre name' })
  ukrainian: string;

  @Field(() => String, { description: 'English genre name' })
  english: string;
}
