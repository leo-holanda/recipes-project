import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/Shopping/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingService.getIngredients()
    this.ShoppingService.ingredientAdded.subscribe((ingredient: Ingredient) => {
      this.ingredients.push(ingredient)
    })
  }
}
