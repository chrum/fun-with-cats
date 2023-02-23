import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loadUser() {
    return of({
      username: 'Chrystian'
    })
  }
}
