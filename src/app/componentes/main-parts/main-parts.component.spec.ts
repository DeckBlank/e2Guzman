import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartsComponent } from './main-parts.component';

describe('MainPartsComponent', () => {
  let component: MainPartsComponent;
  let fixture: ComponentFixture<MainPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
