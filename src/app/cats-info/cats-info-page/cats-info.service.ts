import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, repeat, ReplaySubject, tap, toArray, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CatsInfoService {
  private _data$ = new BehaviorSubject<Array<string>>([]);
  public data$ = this._data$.asObservable();

  constructor(private _http: HttpClient) {
    this.load().subscribe();
  }

  load() {
    return this._http.get<{data: Array<string>}>('https://meowfacts.herokuapp.com/')
      .pipe(
        map((data) => data.data[0]),
        repeat(5),
        toArray(),
        withLatestFrom(this.data$),
        tap(([newData, Data]) => {
          newData = [...new Set(newData)];
          newData.map((item) => {
            if (!Data.includes(item)) {
              Data.push(item);
            }
          })

          this._data$.next([
            ...Data,
          ]);
        })
      )
  }
}
