import { Component, OnInit } from '@angular/core';
import {Owners} from '../../shared/models/owners';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.css']
})
export class OwnersDetailsComponent implements OnInit {

  owner: Owners;
  constructor(private  ownerService: OwnerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('ownerId');
    this.owner = this.ownerService.getOwnerById(id);
  }
}
