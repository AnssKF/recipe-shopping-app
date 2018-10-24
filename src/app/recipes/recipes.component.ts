import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
