import { Injectable } from '@angular/core';
import {Owners} from '../models/owners';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owners: Owners[];
  OwnerId = 1;
  constructor(private http: HttpClient) {this.owners = [
    {ownerId: this.OwnerId++, firstName: 'John', lastName: 'Johnson'},
    {ownerId: this.OwnerId++, firstName: 'Frank', lastName: 'Frankson'}];
  }

    getOwners(): Observable<Owners[]> {
    return this.http.get < Owners[]>
    ('https://mikkpetstoreapp.azurewebsites.net/api/owners?CurrentPage=1&ItemPrPage=10');
    }

  getOwnerById(id: number) {
    return this.owners.find(cust => cust.ownerId === id);
  }

  addOwner(owner: Owners) {
    owner.ownerId = this.OwnerId++;
    this.owners.push(owner);
  }

  updateOwner(owner: Owners) {
    const ownerToUpdate = this.owners.find(own => owner.ownerId === own.ownerId);
    const index = this.owners.indexOf(ownerToUpdate);
    this.owners[index] = owner;
  }

  deleteOwner(id: number) {
    this.owners = this.owners.filter(own => own.ownerId === id);
  }
}
