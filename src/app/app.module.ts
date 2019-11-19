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
import { JetDetailsEditComponent } from './jets/jet-details-edit/jet-details-edit.component';
import { CanEditGuard } from './shared/guards/can-edit.guard';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'jets', component: JetsComponent, children: [
      { path: ':id', component: JetDetailsComponent },
      { path: ':id/edit', component: JetDetailsEditComponent, canActivate: [CanEditGuard] }
    ]
  },
  { path: 'squadron', component: SquadronComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
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
    JetCreationComponent,
    JetDetailsEditComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
