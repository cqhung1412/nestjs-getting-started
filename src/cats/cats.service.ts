import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  getAllCats(): string[] {
    return ['Meow', 'Meow', 'Meow'];
  }

  getCatById(id: string): string {
    return `Meow ${id}`;
  }

  createCat(data: CreateCatDto): string {
    console.log(data);
    return `${data.name} is added.`;
  }
}
