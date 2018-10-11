import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipes/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList: Recipe[];

  
  @ViewChild('recipeNameInput') recipeNameRef: ElementRef;
  @ViewChild('recipeImgInput')  recipeImgRef: ElementRef;
  @ViewChild('recipeDescInput') recipeDescRef: ElementRef;


  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
    this.recipesList = this.recipeService.getRecipes();
  }

  onAddNewRecipe(){
    const recipe = new Recipe(this.recipeNameRef.nativeElement.value,this.recipeDescRef.nativeElement.value,this.recipeImgRef.nativeElement.value);
    this.recipeService.addRecipe(recipe);
  }


}
