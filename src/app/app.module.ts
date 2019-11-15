import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JetListComponent } from './jet-list/jet-list.component';
import { JetItemComponent } from './jet-list/jet-item/jet-item.component';
import { JetDetailsComponent } from './jet-list/jet-details/jet-details.component';
import { SquadronComponent } from './squadron/squadron.component';
import { SquadronEditComponent } from './squadron/squadron-edit/squadron-edit.component';
import { JetsComponent } from './jets/jets.component';

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
export class AppModule { }
