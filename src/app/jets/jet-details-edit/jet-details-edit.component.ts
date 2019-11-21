import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';
import { JetService } from '../../shared/service/jet.service';
import { SquadronService } from '../../shared/service/squadron.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IsDirty } from '../../shared/guards/IsDirty';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jet-details-edit',
  templateUrl: './jet-details-edit.component.html',
  styleUrls: ['./jet-details-edit.component.css']
})
export class JetDetailsEditComponent implements OnInit, IsDirty {

  jet: Jet = new Jet(0);

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

  isDirty(): boolean | Observable<boolean> {
    return this.jet.name == 'TOTO';
  }
}
