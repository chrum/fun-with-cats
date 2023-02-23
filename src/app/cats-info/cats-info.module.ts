import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CatsInfoPageComponent} from "./cats-info-page/cats-info-page.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    CatsInfoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatsInfoPageComponent

      }
    ]),
    ScrollingModule,
    MatCardModule
  ]
})
export class CatsInfoModule { }
