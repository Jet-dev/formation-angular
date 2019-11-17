import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';

@Component({
  selector: 'app-jet-details',
  templateUrl: './jet-details.component.html',
  styleUrls: ['./jet-details.component.css']
})
export class JetDetailsComponent implements OnInit {

  jet: Jet = new Jet('F-162', 'General Dynamics', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/f-16.jpg?alt=media&token=d39e444d-d976-4f7c-97d1-091d9c86fdf9');

  constructor() {
  }

  ngOnInit() {
  }

}
