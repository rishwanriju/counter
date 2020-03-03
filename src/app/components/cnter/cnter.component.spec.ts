import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnterComponent } from './cnter.component';

describe('CnterComponent', () => {
  let component: CnterComponent;
  let fixture: ComponentFixture<CnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
