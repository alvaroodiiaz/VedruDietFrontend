import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FoodService
} from 'src/app/services/food.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-food',
  templateUrl: './admin-food.component.html',
  styleUrls: ['./admin-food.component.css']
})
export class AdminFoodComponent implements OnInit {

  constructor(private foodService: FoodService, private route: Router, private _snackBar: MatSnackBar) {}

  name: string;
  calorias: string;
  lipidos: string;
  hidratos: string;
  proteinas: string;
  fibra: string;
  sodio: string;
  agps: string;
  ags: string;
  ams: string;
  calcio: string;
  fosforo: string;
  potasio: string;
  hierro: string;
  fenilalanina: string;
  tirosina: string;
  fructosa: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {}

  createFood(): void {

    const food = {
      foodName: this.name,
      calorias: this.calorias,
      lipidos: this.lipidos,
      hidratos: this.hidratos,
      proteinas: this.proteinas,
      fibra: this.fibra,
      sodio: this.sodio,
      agps: this.agps,
      ags: this.ags,
      ams: this.ams,
      calcio: this.calcio,
      fosforo: this.fosforo,
      potasio: this.potasio,
      hierro: this.hierro,
      fenilalanina: this.fenilalanina,
      tirosina: this.tirosina,
      fructosa: this.fructosa
    }

    console.log(food);

    this.foodService.createFood(food).subscribe(response => {
      console.log(response);
      this.route.navigate(['adminFood'])
    }, error => {
      console.log(error);
    })

  }

  openSnackBar() {
    this._snackBar.open('Alimento Creado', 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
