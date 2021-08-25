import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing/landing-view/landing-view.component';
import { TrainerViewComponent } from './views/trainer/trainer-view/trainer-view.component';
import { CatalogueViewComponent } from './views/catalogue/catalogue-view/catalogue-view.component';
import { LoginCardComponent } from './views/landing/landing-view/components/login-card/login-card.component';
import {PokemonCardComponent } from './views/catalogue/components/pokemon-card/pokemon-card.component';
import { LogOutButtonComponent } from './views/shared/components/log-out-button/log-out-button.component';
import { ToProfileButtonComponent } from './views/shared/components/to-profile-button/to-profile-button.component';
import { ToCatalogueButtonComponent } from './views/shared/components/to-catalogue-button/to-catalogue-button.component';


import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: LandingViewComponent },
  { path: 'catalogue', component: CatalogueViewComponent },
  { path: 'trainer', component: TrainerViewComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    TrainerViewComponent,
    CatalogueViewComponent,
    LoginCardComponent,
    PokemonCardComponent,
    LogOutButtonComponent,
    ToProfileButtonComponent,
    ToCatalogueButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
