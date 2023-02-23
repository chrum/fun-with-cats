import {Inject, Injectable} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {UserService} from "./user.service";
import {UserStoreService} from "./user-store.service";
import {DOCUMENT} from "@angular/common";
import {filter, map, switchMap, take, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _window!: Window;
  public isAuthenticated$ = this._auth.isAuthenticated$;

  constructor(
    private _auth: AuthService,
    private _user: UserService,
    private _userStore: UserStoreService,
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this._window = this._document.defaultView as Window;

    this._auth.isAuthenticated$
      .pipe(
        filter((isAuthenticated) => isAuthenticated),
        switchMap(() => this._user.loadUser()),
        map((data) => this._userStore.setUser(data)),
        take(1)
      )
      .subscribe(() => {
        this._router.navigate(['/']);
      })
  }

  public logout() {
    this._auth.logout();
    this._window.location.reload();
  }
}
