import {Component} from 'angular2/core';
import {Meal} from './meal.model';


@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-edit-form">
    <h3>Edit Meal</h3>
    <div class="editArea">
      <label for="name">What did you have?</label>
      <input [(ngModel)]="meal.name" placeholder="Meal Name">
      <label for="calories">Amount of calories</label>
      <input [(ngModel)]="meal.calories" type="number" placeholder="Amount of Calories" min="0" >
      <label for="comments">Details</label>
      <input class="detailsInput" type="text"  [(ngModel)]="meal.details" placeholder="Details of the meal">
    </div>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
