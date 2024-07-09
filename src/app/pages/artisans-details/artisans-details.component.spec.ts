import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisansDetailsComponent } from './artisans-details.component';

describe('ArtisansDetailsComponent', () => {
  let component: ArtisansDetailsComponent;
  let fixture: ComponentFixture<ArtisansDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisansDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisansDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
