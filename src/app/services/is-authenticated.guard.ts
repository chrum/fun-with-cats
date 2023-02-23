import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {AppService} from "./app.service";
import {map, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {
  constructor(
    private _router: Router,
    private _app: AppService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this._app.isAuthenticated$
      .pipe(
        take(1),
        map((isAuthenticated) => {
          if (!isAuthenticated) {
            return this._router.parseUrl('/auth');
          }

          return true;
        })
      );
  }
}
