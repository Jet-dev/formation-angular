import { Component, OnInit } from '@angular/core';
import { ReversePipe } from '../shared/pipes/reverse.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ReversePipe]
})
export class HomeComponent implements OnInit {

  private title = '!dlrow olleH';

  constructor(private reversePipe: ReversePipe) { }

  ngOnInit() {
    this.title = this.reversePipe.transform(this.title);
  }

}
