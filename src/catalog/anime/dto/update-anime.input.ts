import { UpdateContentInput } from 'src/catalog/content/dto/update-content.input';
import { CreateAnimeInput } from './create-anime.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnimeInput extends UpdateContentInput {}
