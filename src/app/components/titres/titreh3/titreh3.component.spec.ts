import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titreh3Component } from './titreh3.component';

describe('Titreh3Component', () => {
  let component: Titreh3Component;
  let fixture: ComponentFixture<Titreh3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titreh3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titreh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
