import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList: Recipe[] = [
    new Recipe('recipeName', 'recipeDesc', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('recipeName1', 'recipeDesc1', 'https://images.media-allrecipes.com/images/56589.png')
  ]

  
  @ViewChild('recipeNameInput') recipeNameRef: ElementRef;
  @ViewChild('recipeImgInput')  recipeImgRef: ElementRef;
  @ViewChild('recipeDescInput') recipeDescRef: ElementRef;


  @Output() recipeSelected = new EventEmitter<Recipe>();

  onAddNewRecipe(){
    const recipe = new Recipe(this.recipeNameRef.nativeElement.value,this.recipeDescRef.nativeElement.value,this.recipeImgRef.nativeElement.value);
    this.recipesList.push(recipe);
  }


  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
