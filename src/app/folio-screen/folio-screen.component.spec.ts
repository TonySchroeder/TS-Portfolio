import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioScreenComponent } from './folio-screen.component';

describe('FolioScreenComponent', () => {
  let component: FolioScreenComponent;
  let fixture: ComponentFixture<FolioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolioScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
