import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titreh2Component } from './titreh2.component';

describe('Titreh2Component', () => {
  let component: Titreh2Component;
  let fixture: ComponentFixture<Titreh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titreh2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titreh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
