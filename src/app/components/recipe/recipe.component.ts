import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FoodService } from 'src/app/services/food.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  name: string;
  foods: Observable<any>;
  ingredientesReceta: string[];
  tiempo: string;
  preparacion: string;

  constructor(private recipeService: RecipeService, private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods().pipe(tap(console.log));
  }

  buscar() {
    this.recipeService.getRecipeByName(this.name).subscribe(recipe => {
      console.log(recipe);
      this.tiempo = recipe.recipeTime;
      this.preparacion = recipe.recipePreparation;
      this.ingredientesReceta = recipe.foods.map((food) => food.id);
    });
  }

}
