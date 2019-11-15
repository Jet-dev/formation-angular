import { Component, OnInit } from '@angular/core';
import { Jet } from '../../model/jet.model';

@Component({
  selector: 'app-jet-list',
  templateUrl: './jet-list.component.html',
  styleUrls: ['./jet-list.component.css']
})
export class JetListComponent implements OnInit {

  public jets: Jet[] = [
    new Jet('Rafale', 2001),
    new Jet('F-16', 1970),
    new Jet('F-14 Tomcat', 1974),
    new Jet('Eurofighter Typhoon', 2004, false),
    new Jet('Soukhoï Su-37', 1996)
  ];

  public showEverything = true;

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.showEverything = !this.showEverything;
  }
}
