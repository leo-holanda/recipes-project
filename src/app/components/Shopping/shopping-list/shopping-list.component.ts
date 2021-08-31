import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/Shopping/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private ingredientChangeSub: Subscription;

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingService.getIngredients()
    this.ingredientChangeSub = this.ShoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  ngOnDestroy(): void {
    this.ingredientChangeSub.unsubscribe()
  }
}
