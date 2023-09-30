import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GenreService } from '../genre/genre.service';
import { Content } from './schemas/content.schema';

@Resolver(() => Content)
export class ContentResolver {
    constructor(private readonly genreService: GenreService) {}

    @ResolveField(() => [Content])
    genres(@Parent() content, @Info() { contentType }) {
        return this.genreService.findByParams({ _id: { $in: content.genres } });
    }
}
