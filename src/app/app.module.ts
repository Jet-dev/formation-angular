import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JetsComponent } from './jets/jets.component';

import { SquadronEditComponent } from './squadron/squadron-edit/squadron-edit.component';
import { SquadronComponent } from './squadron/squadron.component';
import { JetItemComponent } from './jets/jet-list/jet-item/jet-item.component';
import { JetListComponent } from './jets/jet-list/jet-list.component';
import { JetDetailsComponent } from './jets/jet-details/jet-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JetListComponent,
    JetItemComponent,
    JetDetailsComponent,
    SquadronComponent,
    SquadronEditComponent,
    JetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
