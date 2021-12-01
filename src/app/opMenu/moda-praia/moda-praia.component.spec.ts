import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaPraiaComponent } from './moda-praia.component';

describe('ModaPraiaComponent', () => {
  let component: ModaPraiaComponent;
  let fixture: ComponentFixture<ModaPraiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaPraiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaPraiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
