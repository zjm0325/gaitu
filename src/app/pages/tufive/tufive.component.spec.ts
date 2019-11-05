import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TufiveComponent } from './tufive.component';

describe('TufiveComponent', () => {
  let component: TufiveComponent;
  let fixture: ComponentFixture<TufiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TufiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TufiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
