import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  pilotForm: FormGroup;
  forbiddenFirstNames = ['Flo', 'Theo', 'William'];

  constructor() {
  }

  ngOnInit() {
    this.pilotForm = new FormGroup({
      'pilotInformation': new FormGroup({
        'firstName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'lastName': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.email, Validators.required]),
      }),
      'preferedJet': new FormControl('Rafale'),
      'whyJet': new FormControl(null),
      'movies': new FormArray([])
    });

    this.pilotForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
  }

  onSubmit() {
    console.log(this.pilotForm)
  }

  addMovies() {
    const control = new FormControl(null, Validators.required);
    (this.pilotForm.get('movies') as FormArray).push(control);
  }

  get controls() {
    return (this.pilotForm.get('movies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenFirstNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }
}

