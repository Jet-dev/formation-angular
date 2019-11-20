import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Jet } from '../../../shared/model/jet.model';
import { JetService } from '../../../shared/service/jet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jet-item',
  templateUrl: './jet-item.component.html',
  styleUrls: ['./jet-item.component.css']
})
export class JetItemComponent implements OnInit, OnChanges {
  @Input() jet: Jet;

  constructor(private jetService: JetService, private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {

  }

  selectJet() {
    this.router.navigate(['jets', this.jet.id]);
  }


}
