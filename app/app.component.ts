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
        new Meal("Cheese Pizza", "It was great", 543),
        new Meal("Larb", "Tasty", 423),
        new Meal("Hotdog", "Yuck", 698),
      ];
    }
}
