import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtorComponent } from './cadastro-ator.component';

describe('CadastroAtorComponent', () => {
  let component: CadastroAtorComponent;
  let fixture: ComponentFixture<CadastroAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
