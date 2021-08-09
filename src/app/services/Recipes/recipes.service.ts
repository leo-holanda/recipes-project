import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/components/Recipes/recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
    'Torta de frango',
    'A melhor torta de frango',
    'https://food-images.files.bbci.co.uk/food/recipes/chicken_pie_24044_16x9.jpg',
    [
      new Ingredient('Frango', 1),
      new Ingredient('Farinha de trigo', 5),
      new Ingredient('Queijo', 3),
      new Ingredient('Pimenta do reino', 2)
    ]
    ),
    new Recipe(
      'Torta de chocolate',
      'A melhor torta de chocolate',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-pie-1599233993.jpg?crop=0.839xw:0.839xh;0.0856xw,0&resize=640:*',
      [
        new Ingredient('Chocolate', 10),
        new Ingredient('Farinha de trigo', 5),
        new Ingredient('Baunilha', 3),
        new Ingredient('Brigadeiro', 5)
      ]
    )
  ]

  getRecipes(){
    return this.recipes.slice()
  }
}
