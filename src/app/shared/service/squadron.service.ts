import { Injectable } from '@angular/core';
import { Jet } from '../model/jet.model';

@Injectable({
  providedIn: 'root'
})
export class SquadronService {

  squadron: Jet[] = [];

  constructor() {
  }

  addJet(jet: Jet) {
    this.squadron.push(jet);
  }

  removeJet(jet: Jet) {
    this.squadron.splice(this.squadron.indexOf(jet), 1);
  }
}
