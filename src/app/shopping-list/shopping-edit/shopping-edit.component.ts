import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppinglistService } from '../../services/shopping-list/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInput') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountRef: ElementRef;


  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredient = new Ingredient(this.ingredientNameRef.nativeElement.value , this.ingredientAmountRef.nativeElement.value);
    this.shoppinglistService.newIngredient.next(ingredient);
  }

}
