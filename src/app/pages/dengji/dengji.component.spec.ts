import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DengjiComponent } from './dengji.component';

describe('DengjiComponent', () => {
  let component: DengjiComponent;
  let fixture: ComponentFixture<DengjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DengjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DengjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
