import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owners-add',
  templateUrl: './owners-add.component.html',
  styleUrls: ['./owners-add.component.css']
})
export class OwnersAddComponent implements OnInit {
  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl('')
  });

  constructor(private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
  const owners = this.ownerForm.value;
  this.ownerService.addOwner(owners);
  this.ownerForm.reset();
  this.router.navigateByUrl('/owners');
  }

}
