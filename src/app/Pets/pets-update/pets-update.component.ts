import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {pets} from '../../shared/models/pets';

@Component({
  selector: 'app-pets-update',
  templateUrl: './pets-update.component.html',
  styleUrls: ['./pets-update.component.css']
})
export class PetsUpdateComponent implements OnInit {
  PetId: number;
  petForm = new FormGroup({
    PetName: new FormControl(''),
    PetType: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl(''),
  });

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.PetId = +this.route.snapshot.paramMap.get('PetId');
    const pet = this.petService.getPetById(this.PetId);
    this.petForm.patchValue({
      PetName: pet.PetName,
      PetType: pet.PetType,
      Birthdate: pet.Birthdate,
      SoldDate: pet.SoldDate,
      Color: pet.Color,
      Price: pet.Price
    });
  }

  save() {
    const pets = this.petForm.value;
    pets.PetId = this.PetId;
    this.petService.updatePet(pets);
  }

}
