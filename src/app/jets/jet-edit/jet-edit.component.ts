import { Component, OnInit } from '@angular/core';
import { Jet } from '../../shared/model/jet.model';

@Component({
  selector: 'app-jet-edit',
  templateUrl: './jet-edit.component.html',
  styleUrls: ['./jet-edit.component.css']
})
export class JetEditComponent implements OnInit {

  jet: Jet;

  constructor() {
  }

  ngOnInit() {
  }

  saveChanges() {
  }

}
