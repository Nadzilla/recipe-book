import { Component, OnInit } from '@angular/core';
import { Ingredient, QuantityTypeEnum, Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  newRecipe: Recipe;

  quantityTypeEnum = Object.values(QuantityTypeEnum);

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    
    this.newRecipe = {
      title: '',
      // recipeId: this.newRecipe ? this.newRecipe.ingredients.length : 1,
      instructions: '',
      ingredients: new Array<Ingredient>()
    }
    console.log( this.newRecipe)
    // this.newRecipe.ingredients = new Array<Ingredient>();
  }

  addIngredient(): void {
    const newIngredient: Ingredient = {
      itemName: '',
      quantity: 0,
      quantityType: null,
      // ingredientId: this.newRecipe ? this.newRecipe.ingredients.length : 1,
    }
    this.newRecipe.ingredients.push(newIngredient);
  }

  addNewRecipe(): void {
    console.log(this.newRecipe)
    this.recipeService.saveRecipe(this.newRecipe).subscribe(newRecipe => {

    });
  }

}
