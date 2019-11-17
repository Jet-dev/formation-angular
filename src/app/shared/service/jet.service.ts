import { Injectable } from '@angular/core';
import { Jet } from '../model/jet.model';

@Injectable({
  providedIn: 'root'
})
export class JetService {

  jets: Jet[] = [
    new Jet(1, 'F-162', 'General Dynamics', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/f-16.jpg?alt=media&token=d39e444d-d976-4f7c-97d1-091d9c86fdf9',
    ),
    new Jet(2, 'mirage 2000', 'Dassault', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/mirage2000.png?alt=media&token=966cd972-68a0-48bb-8b77-f45661b3b1ee',
    ),
    new Jet(3, 'Rafale', 'Dassault', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/rafale.jpg?alt=media&token=054c2843-0e54-48e7-a09c-810d893fc0f9',
    ),
    new Jet(4, 'F-35', 'Pentagone', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/f35.jpg?alt=media&token=d136b3b0-23fc-44a7-839f-ff28fb8d3a38',
    ),
    new Jet(5, 'alpha-jet', 'Dassault', 'https://firebasestorage.googleapis.com/v0/b/formation-71217.appspot.com/o/alpha-jet.jpg?alt=media&token=d8aeba4b-abb8-4c4e-ab36-7528ae6ea1b4',
    )
  ];

  constructor() {
  }

  createJet(jet: Jet) {
    this.jets.push(jet);
  }

  fetchJetById(jetId: number): Jet {
    return this.jets.find((jet) => jet.id === jetId);
  }

}
