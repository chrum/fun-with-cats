import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {IsAuthenticated} from "./services/is-authenticated.guard";

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
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
