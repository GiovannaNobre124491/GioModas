import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBelezaComponent } from './prod-beleza.component';

describe('ProdBelezaComponent', () => {
  let component: ProdBelezaComponent;
  let fixture: ComponentFixture<ProdBelezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBelezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBelezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
