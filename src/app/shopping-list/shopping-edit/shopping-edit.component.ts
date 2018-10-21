import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Ingredient } from '../../models/ingredient.model';
import { ShoppinglistService } from '../../services/shopping-list/shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('editForm') editForm: NgForm;

  itemEditSubscription: Subscription;
  editModeFlag = false;
  editedItemIndex: number;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.itemEditSubscription = this.shoppinglistService.itemSelectedToEdit.subscribe(
      (index: number) => {
        this.editModeFlag = true;
        this.editedItemIndex = index;
        const ingredient: Ingredient = this.shoppinglistService.getIngredient(index);
        this.editForm.setValue({
          'name': ingredient.name,
          'amount': ingredient.amount
        });
      })
  }

  onSubmit() {
    const ingredient = new Ingredient(this.editForm.value.name , this.editForm.value.amount);
    if(this.editModeFlag){
      this.shoppinglistService.updateIngredient(this.editedItemIndex,ingredient);
    }else {
      this.shoppinglistService.newIngredient.next(ingredient);
    }
    this.editModeFlag = false;
    this.editForm.reset();
  }

  onClear() {
    this.editForm.reset();
    this.editModeFlag = false;
  }

  onDelete() {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.itemEditSubscription.unsubscribe();
  }

}
