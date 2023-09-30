import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { GenreService } from './genre.service';
import { Genre } from './schemas/genre.schema';

@Resolver(() => Genre)
export class GenreResolver {
    constructor(private readonly genreService: GenreService) {}

    @Mutation(() => Genre)
    createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
        return this.genreService.create(createGenreInput);
    }

    @Query(() => [Genre], { name: 'genres' })
    findAll() {
        return this.genreService.findAll();
    }

    @Query(() => Genre, { name: 'genre' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.genreService.findOne(id);
    }

    @Mutation(() => Genre)
    updateGenre(
        @Args('_id', { type: () => String }) id: string,
        @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    ) {
        return this.genreService.update(id, updateGenreInput);
    }

    @Mutation(() => Genre)
    removeGenre(@Args('_id', { type: () => String }) id: string) {
        return this.genreService.remove(id);
    }
}
