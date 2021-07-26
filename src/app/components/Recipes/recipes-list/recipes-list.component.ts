import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'Torta de frango',
    'A melhor torta de frango',
    'https://food-images.files.bbci.co.uk/food/recipes/chicken_pie_24044_16x9.jpg'
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
