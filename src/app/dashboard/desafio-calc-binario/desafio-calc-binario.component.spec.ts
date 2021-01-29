import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioCalcBinarioComponent } from './desafio-calc-binario.component';

describe('DesafioCalcBinarioComponent', () => {
  let component: DesafioCalcBinarioComponent;
  let fixture: ComponentFixture<DesafioCalcBinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioCalcBinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioCalcBinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
