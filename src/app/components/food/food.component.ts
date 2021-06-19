import {
  Component,
  OnInit
} from '@angular/core';
import {
  FoodService
} from 'src/app/services/food.service';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  FoodFeaturesComponent
} from '../food-features/food-features.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

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

  nutriente: string;

  constructor(private foodService: FoodService, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  buscar() {
    this.foodService.getFoodByName(this.name).subscribe(food => {
      this.name = food.foodName,
        this.calorias = food.calorias,
        this.lipidos = food.lipidos,
        this.hidratos = food.hidratos,
        this.proteinas = food.proteinas,
        this.fibra = food.fibra,
        this.sodio = food.sodio,
        this.agps = food.agps,
        this.ags = food.ags,
        this.ams = food.ams,
        this.calcio = food.calcio,
        this.fosforo = food.fosforo,
        this.potasio = food.potasio,
        this.hierro = food.hierro,
        this.fenilalanina = food.fenilalanina,
        this.tirosina = food.tirosina,
        this.fructosa = food.fructosa
    });
  }
  openDialog1() {

    const dialogRef = this.dialog.open(FoodFeaturesComponent, {
      height: '350px',
      width: '800px',
      panelClass: 'fondo',
      data: {
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
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  orderBy() {
    this.foodService.orderByNutrientDesc(this.nutriente).subscribe(food => {
    });
  }
}
