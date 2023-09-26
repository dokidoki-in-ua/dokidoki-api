import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
  Info,
} from '@nestjs/graphql';
import { ContentService } from './content.service';
import { Content } from './schemas/content.schema';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { Genre } from '../genre/schemas';

@Resolver(() => Content)
export class ContentResolver {
  // constructor(private readonly contentService: ContentService) {}
  // @Mutation(() => Content)
  // createContent(
  //   @Args('createContentInput') createContentInput: CreateContentInput,
  // ) {
  //   return this.contentService.create(createContentInput);
  // }
  // @Query(() => [Content], { name: 'content' })
  // findAll() {
  //   return this.contentService.findAll();
  // }
  // @Query(() => Content, { name: 'content' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.contentService.findOne(id);
  // }
  // @Mutation(() => Content)
  // updateContent(
  //   @Args('updateContentInput') updateContentInput: UpdateContentInput,
  // ) {
  //   return this.contentService.update(
  //     updateContentInput.id,
  //     updateContentInput,
  //   );
  // }
  // @Mutation(() => Content)
  // removeContent(@Args('id', { type: () => Int }) id: number) {
  //   return this.contentService.remove(id);
  // }
}
