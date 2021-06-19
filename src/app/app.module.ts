import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FoodComponent } from './components/food/food.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AdminRecipeComponent } from './components/admin-recipe/admin-recipe.component';
import { AdminFoodComponent } from './components/admin-food/admin-food.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { AdminWelcomeComponent } from './components/admin-welcome/admin-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FoodFeaturesComponent } from './components/food-features/food-features.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FoodComponent,
    LoginComponent,
    RecipeComponent,
    AdminRecipeComponent,
    AdminFoodComponent,
    FavoritesComponent,
    AdminWelcomeComponent,
    FoodFeaturesComponent,
    MenuComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    ,FormsModule, BrowserAnimationsModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
