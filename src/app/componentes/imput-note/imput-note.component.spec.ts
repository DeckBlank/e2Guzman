import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputNoteComponent } from './imput-note.component';

describe('ImputNoteComponent', () => {
  let component: ImputNoteComponent;
  let fixture: ComponentFixture<ImputNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
