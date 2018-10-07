import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInput') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountRef: ElementRef;

  @Output('AddIngredient-Event') AddIngredient = new EventEmitter<Ingredient>();

  onAddIngredient(){
    this.AddIngredient.emit(new Ingredient(this.ingredientNameRef.nativeElement.value, this.ingredientAmountRef.nativeElement.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
