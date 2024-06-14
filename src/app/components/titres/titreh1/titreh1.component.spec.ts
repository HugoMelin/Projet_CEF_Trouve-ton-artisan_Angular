import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titreh1Component } from './titreh1.component';

describe('Titreh1Component', () => {
  let component: Titreh1Component;
  let fixture: ComponentFixture<Titreh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titreh1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titreh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
