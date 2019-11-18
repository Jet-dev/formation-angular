import { Component } from '@angular/core';
import { Jet } from '../../../shared/model/jet.model';
import { JetService } from '../../../shared/service/jet.service';

@Component({
  selector: 'app-jet-creation',
  templateUrl: './jet-creation.component.html',
  styleUrls: ['./jet-creation.component.css']
})
export class JetCreationComponent {

  newJet = new Jet(0, '', '', '');

  constructor(private jetService: JetService) {
  }

  onJetCreation() {
    this.jetService.createJet(this.newJet);
    this.newJet = new Jet(0, '', '', '');
  }
}
