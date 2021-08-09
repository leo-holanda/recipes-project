import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/Recipes/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  showRecipeDetails(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
