import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JetsComponent } from './jets/jets.component';

import { SquadronComponent } from './squadron/squadron.component';
import { JetListComponent } from './jets/jet-list/jet-list.component';
import { JetDetailsComponent } from './jets/jet-details/jet-details.component';
import { JetCreationComponent } from './jets/jet-list/jet-creation/jet-creation.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JetItemComponent } from './jets/jet-list/jet-item/jet-item.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jets', component: JetsComponent },
  { path: 'jets/:id', component: JetDetailsComponent },
  { path: 'squadron', component: SquadronComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JetListComponent,
    JetDetailsComponent,
    SquadronComponent,
    HomeComponent,
    JetsComponent,
    JetItemComponent,
    JetCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
