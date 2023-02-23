import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInfoPageComponent } from './cats-info-page.component';

describe('CatsInfoPageComponent', () => {
  let component: CatsInfoPageComponent;
  let fixture: ComponentFixture<CatsInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
