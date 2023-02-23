import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {CatsInfoService} from "./cats-info.service";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {filter, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-cats-info-page',
  templateUrl: './cats-info-page.component.html',
  styleUrls: ['./cats-info-page.component.scss']
})
export class CatsInfoPageComponent {
  public items$ = this._cats.data$;

  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;

  constructor(
    private _cats: CatsInfoService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.virtualScroll.elementScrolled()
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

}
