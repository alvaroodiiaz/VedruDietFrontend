import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {tap } from 'rxjs/operators';
import { FoodService } from 'src/app/services/food.service';
import { RecipeService } from 'src/app/services/recipe.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin-recipe',
  templateUrl: './admin-recipe.component.html',
  styleUrls: ['./admin-recipe.component.css']
})
export class AdminRecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: Router, private foodService: FoodService, private _snackBar: MatSnackBar) { }

  ingredientes: Observable<any>;

  recipeName:string;
  recipePreparation: string;
  recipeTime:string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  selectedFoods: String[] = [];

  ngOnInit(): void {
    this.ingredientes = this.foodService.getFoods().pipe(tap(console.log));
  }

  createRecipe(): void {

    console.log(this.selectedFoods);
    



    const recipe = {
      recipeName: this.recipeName,
      recipePreparation: this.recipePreparation,
      recipeTime: this.recipeTime,
    }

    console.log(recipe);
    

    this.recipeService.createRecipe(recipe).subscribe(response => {
      console.log(response);
      this.selectedFoods.forEach(food => {
        this.recipeService.addFood(response.id, food).subscribe(console.log);
      });
      this.route.navigate(['adminRecipe'])
    }, error => {
      console.log(error);
    })

  }

  openSnackBar() {
    this._snackBar.open('Receta Creada', 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
