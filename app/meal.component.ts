import { Component,EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  outputs: ['onMealSelect'],
  directives: [EditMealDetailsComponent],
  template: `
  <div>
    <div class="mealInfo">
    <h3> {{ meal.name }}</h3>
      <p>{{ meal.calories }}</p>
      <p>{{ meal.details }}</p>
    </div>
    <button (click)="editInfo(meal)">Edit</button>
    <edit-meal-details *ngIf="show" [meal]="selectedMeal"></edit-meal-details>
  </div>
    `
})
export class MealComponent {
  public show: boolean = false;
  public meal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
  this.onMealSelect = new EventEmitter();
  }
  editInfo(clickedMeal: Meal) :void {
    this.show = !this.show;
    console.log(this.selectedMeal);
    this.selectedMeal = clickedMeal
  }
}
