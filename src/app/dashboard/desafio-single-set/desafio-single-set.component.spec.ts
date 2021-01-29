import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioSingleSetComponent } from './desafio-single-set.component';

describe('DesafioSingleSetComponent', () => {
  let component: DesafioSingleSetComponent;
  let fixture: ComponentFixture<DesafioSingleSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioSingleSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioSingleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
