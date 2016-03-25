import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 class="brandName">OnTrack</h1>
      <meal-list [mealList]="meals">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
    constructor(){
      this.meals = [
        new Meal("Quinoa Salad", "This was amazing. I would eat it again.", 243),
        new Meal("Green Smoothie", "Super tasty, easty to make, great for breakfast", 123),
        new Meal("Cheeseburger", "Worth it", 698),
      ];
    }
}
