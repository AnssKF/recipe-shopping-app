import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  onRecipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe('recipeName',
    //             'recipeDesc',
    //             'https://images.media-allrecipes.com/images/56589.png',
    //             [new Ingredient('tomato', 5), new Ingredient('potato', 20)]),
    new Recipe('recipeName1',
                'recipeDesc1',
                'https://images.media-allrecipes.com/images/56589.png',
                [new Ingredient('meat', 5), new Ingredient('bla', 20)])
  ];

  constructor(private router: Router) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.onRecipesChanged.next(this.recipes);
  }

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
