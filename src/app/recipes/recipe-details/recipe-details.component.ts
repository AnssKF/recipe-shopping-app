import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppinglistService } from '../../services/shopping-list/shoppinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipes/recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  selectedRecipeId: number;

  constructor(private shoppinglistService: ShoppinglistService,
              private recipeService: RecipeService,
              private router: Router ,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipeId = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.selectedRecipeId);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppinglistService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipeId);
    this.router.navigate(['../']);
  }

}
