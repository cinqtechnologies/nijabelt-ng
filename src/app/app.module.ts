/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs';

import { AppComponent } from './app.component';
import { TeamPresentersComponent } from './team-presenters';

const appRoutes: Routes = [
  {path: 'presenters', component: TeamPresentersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TeamPresentersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
