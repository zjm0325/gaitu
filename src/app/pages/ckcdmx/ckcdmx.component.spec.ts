import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkcdmxComponent } from './ckcdmx.component';

describe('CkcdmxComponent', () => {
  let component: CkcdmxComponent;
  let fixture: ComponentFixture<CkcdmxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkcdmxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkcdmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
