import { Injectable } from '@nestjs/common';
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
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any): void {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any): void {
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
