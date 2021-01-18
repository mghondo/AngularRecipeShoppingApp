import { RecipeService } from '../recipe.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}

// recipes: Recipe[] = [
//   new Recipe('A Test Recipe', 'This is simply a test.', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
//   new Recipe('A Second Test Recipe', 'Another test recipe to see if this is working.', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
//   new Recipe('Sesame Chicken', 'Ive always loved sesame chicken.', 'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg')
// ];
