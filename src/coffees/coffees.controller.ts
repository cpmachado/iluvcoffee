import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: any): string {
    return `This action updates #${id} coffee with '${JSON.stringify(body)}'`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string): string {
    return `This action removes #${id} coffee`;
  }
}
