import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarLocacaoComponent } from './efetuar-locacao.component';

describe('EfetuarLocacaoComponent', () => {
  let component: EfetuarLocacaoComponent;
  let fixture: ComponentFixture<EfetuarLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfetuarLocacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfetuarLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
