import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSynapsisInput {
    @Field(() => String)
    ukrainian: string;

    @Field(() => String)
    english: string;
}
