import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PijamasComponent } from './pijamas.component';

describe('PijamasComponent', () => {
  let component: PijamasComponent;
  let fixture: ComponentFixture<PijamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PijamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PijamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
