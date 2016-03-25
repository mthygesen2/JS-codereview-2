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
    <h3>{{ meal.name }}</h3>
    <p>{{ meal.details }}</p>
    <p>{{ meal.calories }}</p>
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
    // this.onKegSelect.emit(clickedKeg);
  }

}
