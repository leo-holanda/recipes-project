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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './services/Recipes/recipes.service';
import { ShoppingService } from './services/Shopping/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesEditComponent } from './components/Recipes/recipes-edit/recipes-edit.component';

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
    HeaderComponent,
    DropdownDirective,
    RecipesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
