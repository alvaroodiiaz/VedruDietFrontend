import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFeaturesComponent } from './food-features.component';

describe('FoodFeaturesComponent', () => {
  let component: FoodFeaturesComponent;
  let fixture: ComponentFixture<FoodFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
