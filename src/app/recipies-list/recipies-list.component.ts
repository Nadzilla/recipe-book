import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent {

  recipes: Array<Recipe>;
  selectedRecipe: Recipe | null = null;

  servingSize: number = 1;
  

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    }, error => {

    });
  }

  viewRecipe(recipe: Recipe): void {
    console.log('recipe', recipe)
    // this.router.navigate([`/recipies/${recipe.id}`]);
    if (this.selectedRecipe === recipe) {
      this.selectedRecipe = null;
    } else {
      this.selectedRecipe = recipe;
    }

  }

  deleteRecipe(recipe: Recipe): void {
    console.log('recipe', recipe)
  }

  addRecipe(): void {
    this.router.navigate([`/new`]);

  }
}
