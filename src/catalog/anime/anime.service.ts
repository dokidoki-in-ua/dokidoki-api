import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';
import { InjectModel } from '@nestjs/mongoose';
import { Anime, AnimeDocument } from './schemas';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Title, TitleDocument } from '../content/schemas';

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
