import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CompComponent } from './d3-comp.component';

describe('D3CompComponent', () => {
  let component: D3CompComponent;
  let fixture: ComponentFixture<D3CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
