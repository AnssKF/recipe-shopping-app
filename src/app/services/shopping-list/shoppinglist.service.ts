import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  newIngredient = new Subject<Ingredient>();

  itemSelectedToEdit = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples' , 30),
    new Ingredient('tomatos', 60)
  ];

  constructor() { }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
  }

}
