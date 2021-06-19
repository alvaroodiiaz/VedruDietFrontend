import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  userpassword: String;
  usuario1 = "Alvaroodiiaz";
  password1 = "4049";
  usuario2 = "JorgeJuan";
  password2 = "12345";
  succesLogin = false

  constructor(private router: Router, private dialogRef: MatDialog) {}

  ngOnInit(): void {
  }

  Login(){ 
    var done=0; 
    var usuario=this.username; 
    var password=this.userpassword; 
    if (usuario==this.usuario1 && password==this.password1) { 
      this.router.navigate(['adminWelcome']);
      this.succesLogin = true;
      this.dialogRef.closeAll();
    } else
    if (usuario==this.usuario2 && password==this.password2) { 
      this.router.navigate(['adminWelcome']);
      this.succesLogin = true;
      this.dialogRef.closeAll();
    } 
    else { 
      alert("El Usuario o Contraseña introducidos son incorrectos");
      this.succesLogin = false;   
    } 

}}
