import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitName(){
    console.log(this.userName)
    sessionStorage.userName = this.userName;
    this.userName = "";
  }

}
