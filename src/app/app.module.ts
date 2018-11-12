import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './Pets/pets-list/pets-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { OwnersListComponent } from './Owners/owners-list/owners-list.component';
import { OwnersDetailsComponent } from './Owners/owners-details/owners-details.component';
import { PetsDetailsComponent } from './Pets/pets-details/pets-details.component';
import { OwnersAddComponent } from './Owners/owners-add/owners-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PetsAddComponent } from './Pets/pets-add/pets-add.component';
import { OwnersUpdateComponent } from './Owners/owners-update/owners-update.component';
import { PetsUpdateComponent } from './Pets/pets-update/pets-update.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    WelcomeComponent,
    OwnersListComponent,
    OwnersDetailsComponent,
    PetsDetailsComponent,
    OwnersAddComponent,
    PetsAddComponent,
    OwnersUpdateComponent,
    PetsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
