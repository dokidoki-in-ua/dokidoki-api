import { InputType } from '@nestjs/graphql';
import { UpdateContentInput } from 'src/catalog/content/dto/update-content.input';

@InputType()
export class UpdateAnimeInput extends UpdateContentInput {}
