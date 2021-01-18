import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'A Second Test Recipe',
      'Another test recipe to see if this is working.',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
    new Recipe(
      'Sesame Chicken',
      'Ive always loved sesame chicken.',
      'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
