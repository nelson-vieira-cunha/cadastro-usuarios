import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaManterComponent } from './tela-manter.component';

describe('TelaManterComponent', () => {
  let component: TelaManterComponent;
  let fixture: ComponentFixture<TelaManterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaManterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
