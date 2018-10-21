import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('recipeName',
                'recipeDesc',
                'https://images.media-allrecipes.com/images/56589.png',
                [new Ingredient('tomato', 5), new Ingredient('potato', 20)]),
    new Recipe('recipeName1',
                'recipeDesc1',
                'https://images.media-allrecipes.com/images/56589.png',
                [new Ingredient('meat', 5), new Ingredient('bla', 20)])
  ];

  constructor() { }


  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index,1);
  }

}
