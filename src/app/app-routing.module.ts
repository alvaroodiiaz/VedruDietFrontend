import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AdminFoodComponent } from './components/admin-food/admin-food.component';
import { AdminRecipeComponent } from './components/admin-recipe/admin-recipe.component';
import { AdminWelcomeComponent } from './components/admin-welcome/admin-welcome.component';
import { FoodFeaturesComponent } from './components/food-features/food-features.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, 
  {
    path: 'adminWelcome',
    component: AdminWelcomeComponent
  }, 
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'foodFeatures',
    component: FoodFeaturesComponent
  },
  {
    path: 'adminFood',
    component: AdminFoodComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'adminRecipe',
    component: AdminRecipeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'adminMenu',
    component: AdminMenuComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
