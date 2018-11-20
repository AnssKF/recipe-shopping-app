import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './app-routing.module';

import { ShoppinglistService } from './services/shopping-list/shoppinglist.service';
import { RecipeService } from './services/recipes/recipe.service';
import { DataStorageService } from './services/data-storage.service';

// import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,

    ShoppingListModule,
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
