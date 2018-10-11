import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();;

  private recipes: Recipe[] = [
    new Recipe('recipeName', 'recipeDesc', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('recipeName1', 'recipeDesc1', 'https://images.media-allrecipes.com/images/56589.png')
  ]

  constructor() { }


  getRecipes(){
    return this.recipes;
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }



}
