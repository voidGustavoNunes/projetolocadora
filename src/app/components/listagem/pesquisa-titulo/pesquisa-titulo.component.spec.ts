import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaTituloComponent } from './pesquisa-titulo.component';

describe('PesquisaTituloComponent', () => {
  let component: PesquisaTituloComponent;
  let fixture: ComponentFixture<PesquisaTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
