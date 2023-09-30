import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';
import { Anime, AnimeDocument } from './schemas';

@Injectable()
export class AnimeService {
    constructor(
        @InjectModel(Anime.name) private animeModel: Model<AnimeDocument>,
    ) {}

    create(createAnimeInput: CreateAnimeInput) {
        return this.animeModel.create(createAnimeInput);
    }

    findAll() {
        return this.animeModel.find().lean();
    }

    findOne(id: string) {
        return this.animeModel.findById(id).lean();
    }

    update(id: string, updateAnimeInput: UpdateAnimeInput) {
        return this.animeModel
            .findOneAndUpdate({ _id: id }, updateAnimeInput, {
                new: true,
            })
            .lean();
    }

    remove(id: string) {
        return this.animeModel.findByIdAndDelete(id).lean();
    }
}
