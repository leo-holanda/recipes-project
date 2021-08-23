import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/services/Recipes/recipes.service';
import { ShoppingService } from 'src/app/services/Shopping/shopping.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe

  constructor(private ShoppingService: ShoppingService,
              private RecipeService: RecipesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.RecipeService.getRecipe(+params['id'])
      }
    )
  }

  sendIngredientsToShoppingList(){
    this.ShoppingService.addIngredients(this.recipe.ingredients)
  }
}
