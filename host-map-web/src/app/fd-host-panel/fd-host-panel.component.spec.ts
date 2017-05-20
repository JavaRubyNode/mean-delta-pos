import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdHostPanelComponent } from './fd-host-panel.component';

describe('FdHostPanelComponent', () => {
  let component: FdHostPanelComponent;
  let fixture: ComponentFixture<FdHostPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdHostPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdHostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
