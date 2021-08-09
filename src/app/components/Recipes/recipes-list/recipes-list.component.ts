import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipesService } from 'src/app/services/Recipes/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() setActiveRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onActiveRecipe(activeRecipe: Recipe){
    this.setActiveRecipe.emit(activeRecipe)
  }
}
