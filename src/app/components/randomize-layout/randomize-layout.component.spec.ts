import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeLayoutComponent } from './randomize-layout.component';

describe('RandomizeLayoutComponent', () => {
  let component: RandomizeLayoutComponent;
  let fixture: ComponentFixture<RandomizeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomizeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
