import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  @ViewChild('f', { static: true }) pilotForm: NgForm;

  flightPreferences = ['high', 'very high', 'to the moon'];

  constructor() {
  }

  ngOnInit() {
  }

  initForm() {
    // this.pilotForm.form.setValue({
    //   'contactInformation': {
    //     firstName: 'Pete',
    //     lastName: 'Mitchell',
    //     email: 'maverick@jetdev.fr'
    //   },
    //   'preferedJet': 'Rafale',
    //   'whyJet': 'It is cool !',
    //   'checkMe': true,
    //   'flightPreference': 'to the moon'
    // })
    this.pilotForm.form.patchValue({
      'contactInformation': {
        'firstName': 'Tom'
      }
    })
  }

  // classic
  // onSubmit(pilotForm: NgForm) {
  //   console.log(pilotForm);
  // }

  onSubmit() {
    console.log(this.pilotForm);
  }

}
