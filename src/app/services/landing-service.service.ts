import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingServiceService {
  // private showLandingView: boolean = true;
  // private subject = new Subject<any>();

  constructor() { }

  // onToggle(): Observable<any> {
  //   return this.subject.asObservable()

  // }
  // toggleLandingView(): void {
  //   this.showLandingView = !this.showLandingView;
  //   this.subject.next(this.showLandingView);
  // }
}
