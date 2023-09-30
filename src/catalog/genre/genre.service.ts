import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre, GenreDocument } from './schemas';

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
