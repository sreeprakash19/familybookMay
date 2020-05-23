import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidenavContentComponent } from './left-sidenav-content.component';

describe('LeftSidenavContentComponent', () => {
  let component: LeftSidenavContentComponent;
  let fixture: ComponentFixture<LeftSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
