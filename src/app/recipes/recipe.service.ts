import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Celery', 4), new Ingredient('Soy Sauce', 3)]
    ),
    new Recipe(
      'A Second Test Recipe',
      'Another test recipe to see if this is working.',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Sesame Chicken',
      'Ive always loved sesame chicken.',
      'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
