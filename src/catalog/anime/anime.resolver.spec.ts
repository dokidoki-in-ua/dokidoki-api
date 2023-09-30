import { Test, TestingModule } from '@nestjs/testing';
import { AnimeResolver } from './anime.resolver';
import { AnimeService } from './anime.service';

describe('AnimeResolver', () => {
    let resolver: AnimeResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AnimeResolver, AnimeService],
        }).compile();

        resolver = module.get<AnimeResolver>(AnimeResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
