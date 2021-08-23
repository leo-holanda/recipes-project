import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesDetailComponent } from "./components/Recipes/recipes-detail/recipes-detail.component";
import { RecipesEditComponent } from "./components/Recipes/recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./components/Recipes/recipes/recipes.component";
import { ShoppingListComponent } from "./components/Shopping/shopping-list/shopping-list.component";

const AppRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  { 
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { 
        path: '',
        component: RecipesDetailComponent
      },
      { 
        path: 'new',
        component: RecipesEditComponent
      },
      { 
        path: ':id',
        component: RecipesDetailComponent
      },
      { 
        path: ':id/edit',
        component: RecipesEditComponent
      },
    ]
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