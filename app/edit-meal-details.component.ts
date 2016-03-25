import {Component} from 'angular2/core';
import {Meal} from './meal.model';


@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h2>Edit Meal</h2>
    <input [(ngModel)]="meal.name" placeholder="Meal Name">
    <input [(ngModel)]="meal.details" placeholder="Details of the meal">
    <input [(ngModel)]="meal.calories" type="number" placeholder="Amount of Calories" min="0" >
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
