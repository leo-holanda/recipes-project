import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Frango', 1),
    new Ingredient('Farinha', 5),
    new Ingredient('Queijo', 3)
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(name: string, quantity: number){
    this.ingredients.push(new Ingredient(name, quantity));
    this.ingredientAdded.emit(new Ingredient(name, quantity))
  }
}
