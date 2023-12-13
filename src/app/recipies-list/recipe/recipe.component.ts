import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input() recipe!: Recipe;
  _servingSize: number;
   amount: number;

 @Input()
  get servingSize(): number {
    return this._servingSize;
  }
 
  set servingSize(value: number) {
    this._servingSize = value;
    this.recipe.ingredients.forEach(ingredient => {
      ingredient._amount = ingredient?.quantity * this._servingSize;
    });
    console.log(this.recipe)

  }

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    // this.recipeService.getRecipeById(this.recipe.recipeId).subscribe(recipe => {
    //   console.log(recipe)
    // })
  }

  ngOnDestroy() {
  }

}
