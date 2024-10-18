import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesSubjectComponent } from './routes-subject.component';

describe('RoutesSubjectComponent', () => {
  let component: RoutesSubjectComponent;
  let fixture: ComponentFixture<RoutesSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutesSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutesSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
