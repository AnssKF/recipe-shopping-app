import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';
import { ShoppinglistService } from '../services/shopping-list/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientsList: Ingredient[];

  newIngredientSub: Subscription;

  constructor(private shoppinglistService: ShoppinglistService) {

    this.newIngredientSub = this.shoppinglistService.newIngredient.subscribe((ingredient: Ingredient) => {
      this.shoppinglistService.addIngredient(ingredient);
    });

  }

  ngOnInit() {
    this.ingredientsList = this.shoppinglistService.getIngredients();
  }

  ngOnDestroy(){
    this.newIngredientSub.unsubscribe();
  }

  onEditItem(index:number) {
    this.shoppinglistService.itemSelectedToEdit.next(index);
  }

}
