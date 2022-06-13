import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSideComponent } from './start-side.component';

describe('StartSideComponent', () => {
  let component: StartSideComponent;
  let fixture: ComponentFixture<StartSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
