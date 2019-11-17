import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';
import { JetService } from '../../shared/service/jet.service';
import { SquadronService } from '../../shared/service/squadron.service';

@Component({
  selector: 'app-jet-details',
  templateUrl: './jet-details.component.html',
  styleUrls: ['./jet-details.component.css']
})
export class JetDetailsComponent implements OnInit {

  jet: Jet;

  constructor(private jetService: JetService, private squadronService: SquadronService) {
  }

  ngOnInit() {
    this.jetService.jetSelected.subscribe(jet => this.jet = jet)
  }

  addJetToSquadron(jet: Jet){
    this.squadronService.addJet(jet);
  }

}
