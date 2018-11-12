import { Component, OnInit } from '@angular/core';
import {pets} from '../../shared/models/pets';
import {PetService} from '../../shared/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {


  Pets: pets[];
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.Pets = this.petService.getPets();
  }

  delete(id: number) {
    this.petService.deletePet(id);
    this.Pets = this.petService.getPets();

  }

}
