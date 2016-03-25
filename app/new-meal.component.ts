import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h2>add a meal</h2>
    <input placeholder="Meal Name" #newName>
    <input placeholder="Details of the meal" #newDetails>
    <input type="number" placeholder="Amount of Calories" min="0" #newCalories >
    <button (click)="addMeal(newName, newDetails, newCalories)">Add Meal</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {

    this.onSubmitNewMeal.emit([userName.value, userDetails.value, userCalories.value]);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
