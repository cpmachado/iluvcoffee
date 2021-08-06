import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): string {
    return 'This action returns all coffees';
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): string {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: any): any {
    return body;
  }
}
