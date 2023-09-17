import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateTitleInput } from './created-title.input';

@InputType()
export class UpdateTitleInput extends PartialType(CreateTitleInput) {}
