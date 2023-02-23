import {Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this._isAuthenticated$.asObservable();

  login() {
    this._isAuthenticated$.next(true);
  }

  logout() {

  }
}
