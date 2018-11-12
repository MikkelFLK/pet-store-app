import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-owners-update',
  templateUrl: './owners-update.component.html',
  styleUrls: ['./owners-update.component.css']
})
export class OwnersUpdateComponent implements OnInit {
  OwnerId: number;
  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl('')
  });

  constructor(private  ownerService: OwnerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  this.OwnerId = +this.route.snapshot.paramMap.get('OwnerId');
  const owner = this.ownerService.getOwnerById(this.OwnerId);
  this.ownerForm.patchValue({
    FirstName: owner.firstName,
    LastName: owner.lastName
  });
  }

  save() {
    const owners = this.ownerForm.value;
    owners.ownerId = this.OwnerId;
    this.ownerService.updateOwner(owners);
    /*this.ownerForm.reset();
    this.router.navigateByUrl('/owners');*/
  }

}
