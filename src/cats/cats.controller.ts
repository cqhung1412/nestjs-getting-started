import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK).json(this.catsService.getAllCats());
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return this.catsService.getCatById(params.id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    res
      .status(HttpStatus.CREATED)
      .send(this.catsService.createCat(createCatDto));
  }
}
