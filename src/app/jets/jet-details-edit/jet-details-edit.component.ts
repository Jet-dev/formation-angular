import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';
import { JetService } from '../../shared/service/jet.service';
import { SquadronService } from '../../shared/service/squadron.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-jet-details-edit',
  templateUrl: './jet-details-edit.component.html',
  styleUrls: ['./jet-details-edit.component.css']
})
export class JetDetailsEditComponent implements OnInit {

  jet: Jet;

  constructor(private jetService: JetService,
              private squadronService: SquadronService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.jet = this.jetService.fetchJetById(+this.route.snapshot.params['id']);
    this.route.params
      .subscribe((params: Params) =>
        this.jet = this.jetService.fetchJetById(+params['id']));
  }

  saveChanges() {

  }
}