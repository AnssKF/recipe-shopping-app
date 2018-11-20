import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ShoppinglistService } from '../services/shopping-list/shoppinglist.service';
import { RecipeService } from '../services/recipes/recipe.service';
import { DataStorageService } from '../services/data-storage.service';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports:[
    AppRouting,
    HeaderComponent
  ],
  providers: [ShoppinglistService, RecipeService, DataStorageService],
})
export class CoreModule { }
