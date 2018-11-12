import { Injectable } from '@angular/core';
import {Owners} from '../models/owners';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owners: Owners[];
  OwnerId = 1;
  constructor() {this.owners = [
    {OwnerId: this.OwnerId++, FirstName: 'John', LastName: 'Johnson'},
    {OwnerId: this.OwnerId++, FirstName: 'Frank', LastName: 'Frankson'}];
  }

    getOwners(): Owners[] {
    return this.owners;
    }

  getOwnerById(id: number) {
    return this.owners.find(cust => cust.OwnerId === id);
  }

  addOwner(owner: Owners) {
    owner.OwnerId = this.OwnerId++;
    this.owners.push(owner);
  }

  updateOwner(owner: Owners) {
    const ownerToUpdate = this.owners.find(own => owner.OwnerId === own.OwnerId);
    const index = this.owners.indexOf(ownerToUpdate);
    this.owners[index] = owner;
  }

  deleteOwner(id: number){
    this.owners = this.owners.filter(own => own.OwnerId === id);
  }
}
