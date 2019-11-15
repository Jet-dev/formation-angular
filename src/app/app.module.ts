import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SquadronEditComponent } from './squadron/squadron-edit/squadron-edit.component';
import { SquadronComponent } from './squadron/squadron.component';
import { HeaderComponent } from './header/header.component';
import { JetsComponent } from './jets/jets.component';
import { JetListComponent } from './jets/jet-list/jet-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquadronComponent,
    SquadronEditComponent,
    JetsComponent,
    JetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
