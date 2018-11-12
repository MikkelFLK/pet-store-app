import { Component, OnInit } from '@angular/core';
import {pets} from '../../shared/models/pets';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {

  Pet: pets;
  constructor(private  petService: PetService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('petId');
    this.Pet = this.petService.getPetById(id);
  }

}
