import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmpresaComponent } from './cadastro-empresa.component';

describe('CadastroEmpresaComponent', () => {
  let component: CadastroEmpresaComponent;
  let fixture: ComponentFixture<CadastroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmpresaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
