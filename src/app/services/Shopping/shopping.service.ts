import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  private ingredients: Ingredient[] = []

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(name: string, quantity: number){
    this.ingredients.push(new Ingredient(name, quantity));
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
