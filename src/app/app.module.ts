import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {IsAuthenticated} from "./services/is-authenticated.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./cats-info/cats-info.module')
            .then((m) => m.CatsInfoModule),
        canActivate: [IsAuthenticated]
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module')
            .then((m) => m.AuthModule)
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
