import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() { }

  private ingredients: Ingredient[] = []

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(name: string, quantity: number){
    this.ingredients.push(new Ingredient(name, quantity));
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
