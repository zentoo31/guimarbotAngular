import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayuComponent } from './payu.component';

describe('PayuComponent', () => {
  let component: PayuComponent;
  let fixture: ComponentFixture<PayuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
