import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pets-add',
  templateUrl: './pets-add.component.html',
  styleUrls: ['./pets-add.component.css']
})
export class PetsAddComponent implements OnInit {
  petForm = new FormGroup({
    PetName: new FormControl(''),
    PetType: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl(''),
  });

  constructor(private petService: PetService,
              private  router: Router) { }

  ngOnInit() {
  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet);
    this.petForm.reset();
    this.router.navigateByUrl('/pets');
  }

}
