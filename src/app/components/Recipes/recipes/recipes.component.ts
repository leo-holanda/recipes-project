import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/Recipes/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  activeRecipe: Recipe

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.activeRecipe = recipe;
    })
  }

}
