import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePreviewInput } from './create-preview.input';

@InputType()
export class UpdatePreviewInput extends PartialType(CreatePreviewInput) {}
