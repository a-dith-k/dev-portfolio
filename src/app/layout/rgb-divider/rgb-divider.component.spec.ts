import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbDividerComponent } from './rgb-divider.component';

describe('RgbDividerComponent', () => {
  let component: RgbDividerComponent;
  let fixture: ComponentFixture<RgbDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgbDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
