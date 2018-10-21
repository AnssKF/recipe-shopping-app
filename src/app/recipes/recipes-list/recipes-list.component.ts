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

  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
    this.recipesList = this.recipeService.getRecipes();
  }

}
