import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRecipeComponent } from './recipies-list/new-recipe/new-recipe.component';
import { RecipeComponent } from './recipies-list/recipe/recipe.component';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'recipies', component: RecipiesListComponent},
    {path: 'new', component: NewRecipeComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
