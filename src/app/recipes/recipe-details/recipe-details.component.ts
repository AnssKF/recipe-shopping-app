import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppinglistService } from '../../services/shopping-list/shoppinglist.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input('recipeDetails') recipe: Recipe;

  constructor(private shoppinglistService:ShoppinglistService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.shoppinglistService.addIngredients(this.recipe.ingredients);
  }

}
