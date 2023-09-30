import { InputType } from '@nestjs/graphql';
import { CreateContentInput } from 'src/catalog/content/dto/create-content.input';

@InputType()
export class CreateAnimeInput extends CreateContentInput {}
