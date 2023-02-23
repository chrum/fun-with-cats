import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginPageComponent

            }
        ]),
        MatCardModule
    ]
})
export class AuthModule { }
