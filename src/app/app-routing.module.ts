import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./components/Recipes/recipes/recipes.component";
import { ShoppingListComponent } from "./components/Shopping/shopping-list/shopping-list.component";

const AppRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  { 
    path: 'recipes',
    component: RecipesComponent
  },
  { 
    path: 'shopping',
    component: ShoppingListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}