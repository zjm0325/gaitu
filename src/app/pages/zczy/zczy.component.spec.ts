import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZczyComponent } from './zczy.component';

describe('ZczyComponent', () => {
  let component: ZczyComponent;
  let fixture: ComponentFixture<ZczyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZczyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZczyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
