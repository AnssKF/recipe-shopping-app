import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipes/recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipesList: Recipe[];

  onRecipesChangedSubscription: Subscription;

  constructor(private recipeService:RecipeService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getRecipes();
    this.recipesList = this.recipeService.getRecipes();
    this.onRecipesChangedSubscription = this.recipeService.onRecipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipesList = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.onRecipesChangedSubscription.unsubscribe();
  }

}
