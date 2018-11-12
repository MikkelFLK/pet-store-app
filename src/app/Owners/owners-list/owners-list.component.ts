import { Component, OnInit } from '@angular/core';
import {Owners} from '../../shared/models/owners';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  owners: Owners[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.ownerService.getOwners().subscribe
    (listOfOwners => { this.owners = listOfOwners; });

  }

  delete(id: number) {
    this.ownerService.deleteOwner(id);
    // this.owners = this.ownerService.getOwners();
  }
}
