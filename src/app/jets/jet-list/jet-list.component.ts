import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';
import { JetService } from '../../shared/service/jet.service';

@Component({
  selector: 'app-jet-list',
  templateUrl: './jet-list.component.html',
  styleUrls: ['./jet-list.component.css']
})
export class JetListComponent implements OnInit {

  jets: Jet[];

  constructor(private jetService: JetService) {
  }

  ngOnInit() {
    this.jets = this.jetService.jets;
  }

}
