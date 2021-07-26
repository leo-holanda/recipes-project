import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/Shopping/shopping/shopping.component';
import { ShoppingListComponent } from './components/Shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/Shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './components/Recipes/recipes/recipes.component';
import { RecipesListComponent } from './components/Recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './components/Recipes/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './components/Recipes/recipes-detail/recipes-detail.component';
import { HeaderComponent } from './components/Header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
