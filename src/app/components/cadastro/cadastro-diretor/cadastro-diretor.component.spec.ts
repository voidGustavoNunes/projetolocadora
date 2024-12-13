import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDiretorComponent } from './cadastro-diretor.component';

describe('CadastroDiretorComponent', () => {
  let component: CadastroDiretorComponent;
  let fixture: ComponentFixture<CadastroDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDiretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
