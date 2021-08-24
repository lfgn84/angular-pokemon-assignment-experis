import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  userName: string = "";
  routerLink: string = '';

  constructor(private router:Router ) {

   }

  ngOnInit(): void {
  }

  submitName(){
    if(this.userName !==""){
      sessionStorage.userName = this.userName;
      this.router.navigateByUrl("/catalogue")
    }else{
      alert("Please enter a name.")
      
    }

  }
  
 

}
