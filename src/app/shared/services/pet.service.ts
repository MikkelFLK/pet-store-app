import { Injectable } from '@angular/core';
import {pets} from '../models/pets';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  Pets: pets[];
  id = 1;

  constructor(private  http: HttpClient) {this.Pets = [
    {petId: this.id++, petName: 'Larry', petType: 'Goat', birthdate: new Date(), soldDate: new Date(), color: 'Blue', price: 92},
    {petId: this.id++, petName: 'Lar2ry', petType: 'Go2at', birthdate: new Date(), soldDate: new Date(), color: 'Blue', price: 92}];
  }

  getPets(): Observable<pets[]> {
  return this.http.get<pets[]>
  ('https://mikkpetstoreapp.azurewebsites.net/api/pets?CurrentPage=1&ItemPrPage=10');
  }

  getPetById(id: number) {
    return this.Pets.find(pet => pet.petId === id);
  }

  addPet(pet: pets) {
    pet.petId = this.id++;
    this.Pets.push(pet);
  }

  updatePet(pet: pets) {
    const petToUpdate = this.Pets.find(pt => pet.petId === pt.petId);
    const index = this.Pets.indexOf(petToUpdate);
    this.Pets[index] = pet;
  }

  deletePet(id: number) {
    this.Pets = this.Pets.filter(pt => pt.petId === id);
  }

}
