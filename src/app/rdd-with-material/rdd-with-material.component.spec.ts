import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RddWithMaterialComponent } from './rdd-with-material.component';

describe('RddWithMaterialComponent', () => {
  let component: RddWithMaterialComponent;
  let fixture: ComponentFixture<RddWithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RddWithMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RddWithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
