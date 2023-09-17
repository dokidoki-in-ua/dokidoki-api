import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime } from './schemas/anime.schema';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Mutation(() => Anime)
  createAnime(@Args('createAnimeInput') createAnimeInput: CreateAnimeInput) {
    return this.animeService.create(createAnimeInput);
  }

  @Query(() => [Anime], { name: 'animes' })
  findAll() {
    return this.animeService.findAll();
  }

  @Query(() => Anime, { name: 'anime' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.animeService.findOne(id);
  }

  @Mutation(() => Anime)
  updateAnime(
    @Args('_id', { type: () => String }) id: string,
    @Args('updateAnimeInput') updateAnimeInput: UpdateAnimeInput,
  ) {
    return this.animeService.update(id, updateAnimeInput);
  }

  @Mutation(() => Anime)
  removeAnime(@Args('_id', { type: () => String }) id: string) {
    return this.animeService.remove(id);
  }
}
