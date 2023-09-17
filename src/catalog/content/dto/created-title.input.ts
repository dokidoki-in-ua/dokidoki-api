import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTitleInput {
  @Field(() => String, { description: 'Ukrainian title' })
  ukrainian: string;

  @Field(() => String, { description: 'English title' })
  english: string;

  @Field(() => String, { description: 'Native title' })
  native: string;

  @Field(() => String, { description: 'Romaji title' })
  romaji: string;
}
