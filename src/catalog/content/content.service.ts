import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContentModule } from './content.module';

@Injectable()
export class ContentService {
  // create(createContentInput: CreateContentInput) {
  //   return 'LOL';
  // }
  // findAll() {
  //   return `This action returns all content`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} content`;
  // }
  // update(id: number, updateContentInput: UpdateContentInput) {
  //   return `This action updates a #${id} content`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} content`;
  // }
}
