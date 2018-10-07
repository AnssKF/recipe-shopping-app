import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = new Recipe("no recipe selected", "...", "https://images.media-allrecipes.com/images/56589.png");

  constructor() { }

  ngOnInit() {
  }

}
