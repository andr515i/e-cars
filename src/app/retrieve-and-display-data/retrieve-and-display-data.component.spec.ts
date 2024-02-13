import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveAndDisplayDataComponent } from './retrieve-and-display-data.component';

describe('RetrieveAndDisplayDataComponent', () => {
  let component: RetrieveAndDisplayDataComponent;
  let fixture: ComponentFixture<RetrieveAndDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieveAndDisplayDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetrieveAndDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
