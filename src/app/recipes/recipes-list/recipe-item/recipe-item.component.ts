import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItm') recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeSelected(){
    this.recipeSelected.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
