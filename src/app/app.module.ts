import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing/landing-view/landing-view.component';
import { TrainerViewComponent } from './views/trainer/trainer-view/trainer-view.component';
import { CatalogueViewComponent } from './views/catalogue/catalogue-view/catalogue-view.component';
import { LoginCardComponent } from './views/landing/landing-view/components/login-card/login-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    TrainerViewComponent,
    CatalogueViewComponent,
    LoginCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
