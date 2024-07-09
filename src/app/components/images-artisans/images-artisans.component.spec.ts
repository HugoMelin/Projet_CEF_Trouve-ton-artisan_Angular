import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesArtisansComponent } from './images-artisans.component';

describe('ImagesArtisansComponent', () => {
  let component: ImagesArtisansComponent;
  let fixture: ComponentFixture<ImagesArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
