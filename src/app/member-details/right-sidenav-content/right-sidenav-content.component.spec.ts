import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidenavContentComponent } from './right-sidenav-content.component';

describe('RightSidenavContentComponent', () => {
  let component: RightSidenavContentComponent;
  let fixture: ComponentFixture<RightSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
