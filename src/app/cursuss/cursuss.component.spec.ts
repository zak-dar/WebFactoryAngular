import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursussComponent } from './cursuss.component';

describe('CursussComponent', () => {
  let component: CursussComponent;
  let fixture: ComponentFixture<CursussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
