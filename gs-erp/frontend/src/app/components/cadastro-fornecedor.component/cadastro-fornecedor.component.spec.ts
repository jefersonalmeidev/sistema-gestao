import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFornecedorComponent } from './cadastro-fornecedor.component';

describe('CadastroFornecedorComponent', () => {
  let component: CadastroFornecedorComponent;
  let fixture: ComponentFixture<CadastroFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFornecedorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
