import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsList: Ingredient[] = [
    new Ingredient('apples' , 30),
    new Ingredient('tomatos', 60)
  ];

  onAddIngredient(ingredient:Ingredient){
    this.ingredientsList.push(ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
