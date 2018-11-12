import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './Welcome/welcome.component';
import {OwnersListComponent} from './Owners/owners-list/owners-list.component';
import {PetsListComponent} from './Pets/pets-list/pets-list.component';
import {OwnersDetailsComponent} from './Owners/owners-details/owners-details.component';
import {PetsDetailsComponent} from './Pets/pets-details/pets-details.component';
import {OwnersAddComponent} from './Owners/owners-add/owners-add.component';
import {PetsAddComponent} from './Pets/pets-add/pets-add.component';
import {OwnersUpdateComponent} from './Owners/owners-update/owners-update.component';
import {PetsUpdateComponent} from './Pets/pets-update/pets-update.component';


const routes: Routes = [
  {path: 'owners', component: OwnersListComponent},
  {path: 'owners-add', component: OwnersAddComponent},
  {path: 'owners-update/:ownerId', component: OwnersUpdateComponent},
  {path: 'owners/:ownerId', component: OwnersDetailsComponent},
  {path: 'pets', component: PetsListComponent},
  {path: 'pets-add', component: PetsAddComponent},
  {path: 'pets-update/:petId', component: PetsUpdateComponent},
  {path: 'pets/:petId', component: PetsDetailsComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
