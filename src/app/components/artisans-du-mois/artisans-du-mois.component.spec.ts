import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisansDuMoisComponent } from './artisans-du-mois.component';

describe('ArtisansDuMoisComponent', () => {
  let component: ArtisansDuMoisComponent;
  let fixture: ComponentFixture<ArtisansDuMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisansDuMoisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisansDuMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
