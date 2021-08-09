import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/Shopping/shopping.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  sendIngredientsToShoppingList(){
    this.ShoppingService.addIngredients(this.recipe.ingredients)
  }
}
