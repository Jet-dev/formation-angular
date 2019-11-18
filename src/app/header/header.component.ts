import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../shared/service/fakeAuth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(private authService: FakeAuthService) {
  }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated;
  }

  login() {
    this.authService.login();
    this.loggedIn = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.isAuthenticated;
  }

}
