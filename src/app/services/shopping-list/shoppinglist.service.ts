import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  newIngredient = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples' , 30),
    new Ingredient('tomatos', 60)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

}
