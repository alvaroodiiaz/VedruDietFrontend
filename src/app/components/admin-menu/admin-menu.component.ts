import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  Router
} from '@angular/router';
import {
  MenuService
} from 'src/app/services/menu.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  name: string;
  DesayunoL: string;
  DesayunoM: string;
  DesayunoX: string;
  DesayunoJ: string;
  DesayunoV: string;
  DesayunoS: string;
  DesayunoD: string;
  MediaL: string;
  MediaM: string;
  MediaX: string;
  MediaJ: string;
  MediaV: string;
  MediaS: string;
  MediaD: string;
  AlmuerzoL: string;
  AlmuerzoM: string;
  AlmuerzoX: string;
  AlmuerzoJ: string;
  AlmuerzoV: string;
  AlmuerzoS: string;
  AlmuerzoD: string;
  MeriendaL: string;
  MeriendaM: string;
  MeriendaX: string;
  MeriendaJ: string;
  MeriendaV: string;
  MeriendaS: string;
  MeriendaD: string;
  CenaL: string;
  CenaM: string;
  CenaX: string;
  CenaJ: string;
  CenaV: string;
  CenaS: string;
  CenaD: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private menuService: MenuService, private route: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  createMenu(): void {

    const menu = {
      name: this.name,
      desayunoL: this.DesayunoL,
      desayunoM: this.DesayunoM,
      desayunoX: this.DesayunoX,
      desayunoJ: this.DesayunoJ,
      desayunoV: this.DesayunoV,
      desayunoS: this.DesayunoS,
      desayunoD: this.DesayunoD,
      mediaMananaL: this.MediaL,
      mediaMananaM: this.MediaM,
      mediaMananaX: this.MediaX,
      mediaMananaJ: this.MediaJ,
      mediaMananaV: this.MediaV,
      mediaMananaS: this.MediaS,
      mediaMananaD: this.MediaD,
      almuerzoL: this.AlmuerzoL,
      almuerzoM: this.AlmuerzoM,
      almuerzoX: this.AlmuerzoX,
      almuerzoJ: this.AlmuerzoJ,
      almuerzoV: this.AlmuerzoV,
      almuerzoS: this.AlmuerzoS,
      almuerzoD: this.AlmuerzoD,
      meriendaL: this.MeriendaL,
      meriendaM: this.MeriendaM,
      meriendaX: this.MeriendaX,
      meriendaJ: this.MeriendaJ,
      meriendaV: this.MeriendaV,
      meriendaS: this.MeriendaS,
      meriendaD: this.MeriendaD,
      cenaL: this.CenaL,
      cenaM: this.CenaM,
      cenaX: this.CenaX,
      cenaJ: this.CenaJ,
      cenaV: this.CenaV,
      cenaS: this.CenaS,
      cenaD: this.CenaD,
    }

    console.log(menu);

    this.menuService.createMenu(menu).subscribe(response => {
      console.log(response);
      this.route.navigate(['adminMenu'])
    }, error => {
      console.log(error);
    })

  }

  openSnackBar() {
    this._snackBar.open('Menú Creado', 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
