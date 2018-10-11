import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

import { RecipeService } from '../services/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = new Recipe("no recipe selected", "...", "https://images.media-allrecipes.com/images/56589.png");

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((selectedRecipe:Recipe)=>{
      this.selectedRecipe = selectedRecipe;
    })
  }

}
