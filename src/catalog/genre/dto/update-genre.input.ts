import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateGenreInput } from './create-genre.input';

@InputType()
export class UpdateGenreInput extends PartialType(CreateGenreInput) {
    @Field(() => String, { description: 'Ukainain genre name', nullable: true })
    ukrainian: string;

    @Field(() => String, { description: 'English genre name', nullable: true })
    english: string;
}
