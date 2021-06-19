import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-food-features',
  templateUrl: './food-features.component.html',
  styleUrls: ['./food-features.component.css']
})
export class FoodFeaturesComponent implements OnInit {

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

  constructor(@Inject(MAT_DIALOG_DATA) public dataDialog) { }

  ngOnInit(): void {
    console.log(this.dataDialog);
    this.lipidos = this.dataDialog.lipidos;
    this.hidratos = this.dataDialog.hidratos;
    this.proteinas = this.dataDialog.proteinas;
    this.fibra = this.dataDialog.fibra;
    this.sodio = this.dataDialog.sodio;
    this.agps = this.dataDialog.agps;
    this.ags = this.dataDialog.ags;
    this.ams = this.dataDialog.ams;
    this.calcio = this.dataDialog.calcio;
    this.fosforo = this.dataDialog.fosforo;
    this.potasio = this.dataDialog.potasio;
    this.hierro = this.dataDialog.hierro;
    this.fenilalanina = this.dataDialog.fenilalanina;
    this.tirosina = this.dataDialog.tirosina;
    this.fructosa = this.dataDialog.fructosa;
    }

}
