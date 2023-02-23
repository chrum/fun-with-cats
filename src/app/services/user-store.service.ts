import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _data$ = new ReplaySubject<User>(1);
  public data$ = this._data$.asObservable();

  setUser(data: User) {
    this._data$.next(data);
  }
}
