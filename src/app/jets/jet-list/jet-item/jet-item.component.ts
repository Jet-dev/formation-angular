import { Component, Input, OnInit } from '@angular/core';
import { Jet } from '../../../shared/model/jet.model';
import { JetService } from '../../../shared/service/jet.service';

@Component({
  selector: 'app-jet-item',
  templateUrl: './jet-item.component.html',
  styleUrls: ['./jet-item.component.css']
})
export class JetItemComponent implements OnInit {

  @Input() jet: Jet;

  constructor(private jetService: JetService) {
  }

  ngOnInit() {
  }

  selectJet() {
    this.jetService.selectJet(this.jet);
  }
}
