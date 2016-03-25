import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)">
    </new-meal>
    <meal-display *ngFor="#currentMeal of mealList"
    [meal]="currentMeal" >
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];

}
