import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuService
} from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

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

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  buscar() {
    this.menuService.getMenuByPacientName(this.name).subscribe(menu => {
      this.name= menu.name,
      this.DesayunoL = menu.desayunoL;
      this.DesayunoM = menu.desayunoM;
      this.DesayunoX = menu.desayunoX;
      this.DesayunoJ = menu.desayunoJ;
      this.DesayunoV = menu.desayunoV;
      this.DesayunoS = menu.desayunoS;
      this.DesayunoD = menu.desayunoD;
      this.MediaL = menu.mediaMananaL;
      this.MediaM = menu.mediaMananaM;
      this.MediaX = menu.mediaMananaX;
      this.MediaJ = menu.mediaMananaJ;
      this.MediaV = menu.mediaMananaV;
      this.MediaS = menu.mediaMananaS;
      this.MediaD = menu.mediaMananaD;
      this.AlmuerzoL = menu.almuerzoL;
      this.AlmuerzoM = menu.almuerzoM;
      this.AlmuerzoX = menu.almuerzoX;
      this.AlmuerzoJ = menu.almuerzoJ;
      this.AlmuerzoV = menu.almuerzoV;
      this.AlmuerzoS = menu.almuerzoS;
      this.AlmuerzoD = menu.almuerzoD;
      this.MeriendaL = menu.meriendaL;
      this.MeriendaM = menu.meriendaM;
      this.MeriendaX = menu.meriendaX;
      this.MeriendaJ = menu.meriendaJ;
      this.MeriendaV = menu.meriendaV;
      this.MeriendaS = menu.meriendaS;
      this.MeriendaD = menu.meriendaD;
      this.CenaL = menu.cenaL;
      this.CenaM = menu.cenaM;
      this.CenaX = menu.cenaX;
      this.CenaJ = menu.cenaJ;
      this.CenaV = menu.cenaV;
      this.CenaS = menu.cenaS;
      this.CenaD = menu.cenaD;

      console.log(menu);
    });

  }
}
