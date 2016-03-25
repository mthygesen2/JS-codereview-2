import { Component,EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  outputs: ['onMealSelect'],
  directives: [EditMealDetailsComponent],
  template: `
  <div class="mealsInList">
    <h3  (click)="clickShowInfo()"> {{ meal.name }}</h3>
    <div *ngIf="showInfo" class="mealInfo">
      <p>{{ meal.calories + " calories"}}</p>
      <p>{{ meal.details }}</p>
      <button (click)="editInfo(meal)">Edit</button>
    </div>
    <edit-meal-details *ngIf="show" [meal]="selectedMeal">
    </edit-meal-details>
  </div>
    `
})
export class MealComponent {
  public show: boolean = false;
  public meal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public showInfo: boolean = false;
  constructor() {
  this.onMealSelect = new EventEmitter();
  }
  editInfo(clickedMeal: Meal) :void {
    this.show = !this.show;
    console.log(this.selectedMeal);
    this.selectedMeal = clickedMeal
  }
  clickShowInfo() :void {
    this.showInfo = !this.showInfo;
  }
}
