import { Injectable } from '@angular/core';
import {pets} from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  Pets: pets[];
  id = 1;

  constructor() {this.Pets = [
    {PetId: this.id++, PetName: 'Larry', PetType: 'Goat', Birthdate: new Date(), SoldDate: new Date(), Color: 'Blue', Price: 92},
    {PetId: this.id++, PetName: 'Lar2ry', PetType: 'Go2at', Birthdate: new Date(), SoldDate: new Date(), Color: 'Blue', Price: 92}];
  }

  getPets(): pets[] {
  return this.Pets;
  }

  getPetById(id: number) {
    return this.Pets.find(pet => pet.PetId === id);
  }

  addPet(pet: pets) {
    pet.PetId = this.id++;
    this.Pets.push(pet);
  }

  updatePet(pet: pets) {
    const petToUpdate = this.Pets.find(pt => pet.PetId === pt.PetId);
    const index = this.Pets.indexOf(petToUpdate);
    this.Pets[index] = pet;
  }

  deletePet(id: number) {
    this.Pets = this.Pets.filter(pt => pt.PetId === id);
  }

}
