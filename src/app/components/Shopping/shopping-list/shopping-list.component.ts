import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Frango', 1),
    new Ingredient('Farinha', 5),
    new Ingredient('Queijo', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
