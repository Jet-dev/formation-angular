import { Component, OnInit } from '@angular/core';
import { Jet } from '../shared/model/jet.model';
import { SquadronService } from '../shared/service/squadron.service';

@Component({
  selector: 'app-squadron',
  templateUrl: './squadron.component.html',
  styleUrls: ['./squadron.component.css']
})
export class SquadronComponent implements OnInit {
  jets: Jet[];

  constructor(private squadronService: SquadronService) {
  }

  ngOnInit() {
    this.jets = this.squadronService.squadron;
  }

  removeJet(jet: Jet) {
    this.squadronService.removeJet(jet);
  }

}
