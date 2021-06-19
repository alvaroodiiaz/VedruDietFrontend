import { Component, Inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import {
  MatDialog
} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VedruDietFrontend';

  userName: string;

  session=true;

  constructor(public dialog: MatDialog) {}

  openDialog() {

    const dialogRef = this.dialog.open(LoginComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  varSession(){
    this.session=!this.session;
  }
}
