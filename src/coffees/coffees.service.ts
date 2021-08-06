import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find((item) => item.id === +id);

    if (!coffee) {
      throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): void {
    const id = this.coffees.reduce((acc, { id }) => Math.max(acc, id), 0) + 1;
    const coffee: Coffee = {
      ...createCoffeeDto,
      id,
    };

    this.coffees.push(coffee);
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto): void {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      // Update coffee
      Object.keys(existingCoffee).forEach((prop) => {
        if (typeof updateCoffeeDto[prop] !== 'undefined') {
          existingCoffee[prop] = updateCoffeeDto[prop];
        }
      });
    }
  }

  remove(id: string): void {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
