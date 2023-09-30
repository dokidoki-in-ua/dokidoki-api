import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimeService } from './anime.service';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';
import { Anime, AnimeDocument } from './schemas/anime.schema';

@Resolver(() => Anime)
export class AnimeResolver {
    constructor(
        private readonly animeService: AnimeService,
        @InjectModel(Anime.name) private animeModel: Model<AnimeDocument>,
    ) {}

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
