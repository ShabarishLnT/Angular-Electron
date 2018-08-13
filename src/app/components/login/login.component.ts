import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
     
     
  }
 
  public verifyLogin($event){
    let username = (document.getElementById("idUserName")as HTMLInputElement).value;
    let password = (document.getElementById("idPassword")as HTMLInputElement).value;
    if(username === "a"){
      this.router.navigate(['eula']);
    }
  }

  ngOnInit() {
  }

}