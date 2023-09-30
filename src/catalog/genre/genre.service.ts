import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { InjectModel } from '@nestjs/mongoose';
import { Genre, GenreDocument } from './schemas';
import { Model } from 'mongoose';
import { ID } from '@nestjs/graphql';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private genreModel: Model<GenreDocument>,
  ) {}

  create(createGenreInput: CreateGenreInput) {
    return this.genreModel.create(createGenreInput);
  }

  findAll() {
    return this.genreModel.find().lean();
  }

  findOne(id: string) {
    return this.genreModel.findById(id).lean();
  }

  findByParams(params: object) {
    return this.genreModel.find(params).lean();
  }

  update(id: string, updateGenreInput: UpdateGenreInput) {
    return this.genreModel
      .findOneAndUpdate({ _id: id }, updateGenreInput, {
        new: true,
      })
      .lean();
  }

  remove(id: string) {
    return this.genreModel.findByIdAndDelete(id).lean();
  }
}
