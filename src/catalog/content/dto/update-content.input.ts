import { CreateContentInput } from './create-content.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UpdateTitleInput } from './update-title.input';

@InputType()
export class UpdateContentInput {
  @Field(() => UpdateTitleInput, { nullable: true })
  title: UpdateTitleInput;
}
