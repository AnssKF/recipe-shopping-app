import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';
import { ShoppinglistService } from '../services/shopping-list/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppinglistService]
})
export class ShoppingListComponent implements OnInit {

  ingredientsList: Ingredient[];

  constructor(private shoppinglistService:ShoppinglistService) {
    this.shoppinglistService.newIngredient.subscribe((ingredient:Ingredient)=>{
      this.shoppinglistService.addIngredient(ingredient);
    })
  }

  ngOnInit() {
    this.ingredientsList = this.shoppinglistService.getIngredients();
  }

}
