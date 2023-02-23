import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {CatsInfoService} from "./cats-info.service";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {filter, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-cats-info-page',
  templateUrl: './cats-info-page.component.html',
  styleUrls: ['./cats-info-page.component.scss']
})
export class CatsInfoPageComponent {
  public items$ = this._cats.data$;
  private _sub!: Subscription;

  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;

  constructor(
    private _cats: CatsInfoService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this._sub = this.virtualScroll.elementScrolled()
      .pipe(
        filter(() => {
          const dist = this.virtualScroll.measureScrollOffset('bottom');

          return dist < 1;
        }),
        switchMap(() => this._cats.load())
      )
      .subscribe(() => {
        this._cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

}
