import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Recipe {
  recipeId?: number;
  title: string;
  instructions: string;
  ingredients: Array<Ingredient>;
}

export interface Ingredient {
  ingredientId?: number;
  itemName: string;
  quantity: number;
  quantityType: QuantityTypeEnum | null;
  _amount?: number;
}

export enum QuantityTypeEnum {
  Cup = "CUP",
  Oz = "OZ",
  Teaspoon = "TEASPOON"
}

const recipes: Array<Recipe> = [
  {
    title: 'Mac & Cheese',
    instructions: 'Start by bringing a large pot of salted water to a boil. Cook 8 ounces of elbow macaroni according to the package instructions until it reaches an al dente consistency. Once cooked, drain the macaroni and set it aside. In a medium saucepan over medium heat, melt 1/4 cup of unsalted butter. Stir in 1/4 cup of all-purpose flour and cook for 1-2 minutes to create a roux. Gradually whisk in 3 cups of milk to avoid lumps, continuing to whisk until the mixture thickens, usually around 5-7 minutes. Reduce the heat to low, and add 2 cups of shredded sharp cheddar cheese and 1/2 cup of grated Parmesan cheese. Stir until the cheese is fully melted and the sauce becomes smooth. Season the sauce with 1/2 teaspoon of salt, 1/4 teaspoon of black pepper, and optionally, 1/4 teaspoon of paprika for added flavor. Pour the cheese sauce over the cooked macaroni, stirring until the macaroni is thoroughly coated with the cheese sauce. For a crunchy topping, you can melt a tablespoon of butter in a skillet, add 1/2 cup of breadcrumbs, and cook until golden brown. Sprinkle the breadcrumbs over the macaroni and cheese. Serve the dish hot and savor your homemade comfort food, adjusting the recipe to your taste by adding extras like cooked bacon, diced tomatoes, or a pinch of cayenne pepper. Enjoy!',
    ingredients: [
      {
        itemName: 'elbow macaroni',
        quantity: 8,
        quantityType: QuantityTypeEnum.Oz
      },
      {
        itemName: 'shredded sharp cheddar cheese',
        quantity: 2,
        quantityType: QuantityTypeEnum.Cup
      },
      {
        itemName: 'grated Parmesan cheese',
        quantity: 0.5,
        quantityType: QuantityTypeEnum.Cup
      },
      {
        itemName: 'milk',
        quantity: 3,
        quantityType: QuantityTypeEnum.Cup
      },
      {
        itemName: 'unsalted butter',
        quantity: 0.25,
        quantityType: QuantityTypeEnum.Cup
      },
    ]
  }
]



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Array<Recipe>> {
    // return of(recipes);
    const url = `http://localhost:8080/api/v1/recipe`;
    return this.http.get<Array<Recipe>>(url);
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `http://localhost:8080/api/v1/recipe/${id}`;
    return this.http.get<Recipe>(url);
  }

  saveRecipe(recipe: Recipe): Observable<any> {
    const url = `http://localhost:8080/api/v1/recipe`;
    return this.http.post(url, recipe);
  }


}
