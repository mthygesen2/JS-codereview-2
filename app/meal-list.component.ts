import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">All Meals</option>
    <option value="healthy">Low Calorie</option>
    <option value="unhealthy">High Calories</option>
    </select>
    <new-meal (onSubmitNewMeal)="createMeal($event)">
    </new-meal>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal" >
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal([name, details, calories]): void {

    var newMeal = new Meal(name, details, calories);

    this.mealList.push(newMeal);

  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);

  }

  onChange(filterOption) {
  this.filterHealthy = filterOption;
  }
}
