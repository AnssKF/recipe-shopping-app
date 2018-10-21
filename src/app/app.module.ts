import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppinglistService } from './services/shopping-list/shoppinglist.service';
import { AppRouting } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppinglistService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
