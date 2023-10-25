import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePreviewInput {
    @Field(() => String)
    posterTall: string;

    @Field(() => String)
    posterWide: string;

    @Field(() => String)
    background: string;

    @Field(() => String)
    logo: string;

    @Field(() => [String])
    screenshots: string[];
}
