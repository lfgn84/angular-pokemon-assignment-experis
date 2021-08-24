import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-view',
  templateUrl: './trainer-view.component.html',
  styleUrls: ['./trainer-view.component.css']
})
export class TrainerViewComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    if(sessionStorage.userName === "" || !sessionStorage.userName){
      this.router.navigateByUrl("")
  }
  }

}
