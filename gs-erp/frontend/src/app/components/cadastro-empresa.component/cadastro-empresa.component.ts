import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-cad-emp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  formEmpresa: FormGroup;

  empresa = {
    identificacao: {
      codigo: '',
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      inscricaoEstadual: '',
      inscricaoMunicipal: '',
      tipoEmpresa: '' as 'MEI' | 'ME' | 'EPP' | 'LTDA' | 'SA',
      naturezaJuridica: '',
      dataAbertura: '',
      situacaoCadastral: 'Ativa' as 'Ativa' | 'Inativa'
    },
    contato: {
      telefone: '',
      celular: '',
      emailPrincipal: '',
      emailFinanceiro: '',
      site: '',
      responsavel: ''
    },
    fiscais: {
      regimeTributario: '' as 'Simples Nacional' | 'Lucro Presumido' | 'Lucro Real',
      optanteSimplesNacional: false,
      cnaePrincipal: '',
      cnaesSecundarios: [] as string[],
      codigoRegimeTributario: '',
      contribuinteICMS: false,
      aliquotas: {
        icms: 0,
        iss: 0,
        pis: 0,
        cofins: 0
      },
      municipioIncidenciaISS: ''
    },
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: 'Brasil',
      tipo: 'Matriz' as 'Matriz' | 'Filial'
    },
    bancario: {
      banco: '',
      agencia: '',
      conta: '',
      tipoConta: 'Corrente' as 'Corrente' | 'Poupança' | 'Investimento',
      chavePix: '',
      titular: ''
    }
  };

  constructor() {
    this.formEmpresa = this.fb.group({
      // Identificação
      codigo: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      inscricaoEstadual: [''],
      inscricaoMunicipal: [''],
      tipoEmpresa: ['', Validators.required],
      naturezaJuridica: [''],
      dataAbertura: ['', Validators.required],
      situacaoCadastral: ['Ativa', Validators.required], // ⚠️ Corrigido: adicionado ao FormGroup

      // Contato
      telefone: [''],
      celular: [''],
      emailPrincipal: ['', [Validators.required, Validators.email]],
      emailFinanceiro: [''],
      site: [''],
      responsavel: [''],

      // Fiscais
      regimeTributario: ['', Validators.required],
      optanteSimplesNacional: [false],
      cnaePrincipal: [''],
      cnaesSecundarios: [[]],
      codigoRegimeTributario: [''],
      contribuinteICMS: [false],
      aliquotas: this.fb.group({
        icms: [0],
        iss: [0],
        pis: [0],
        cofins: [0]
      }),
      municipioIncidenciaISS: [''],

      // Endereço
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: [''],
      cidade: ['', Validators.required],
      estado: [''],
      pais: ['Brasil'],
      tipo: ['Matriz'],

      // Financeiro
      banco: [''],
      agencia: [''],
      conta: [''],
      tipoConta: ['Corrente'],
      chavePix: [''],
      titular: ['']
    });
  }

  onSubmit() {
    if (this.formEmpresa.valid) {
      console.log('Empresa:', this.formEmpresa.value);

      // Atualiza o objeto empresa com os valores do formulário
      Object.assign(this.empresa, this.formEmpresa.value);
    } else {
      this.formEmpresa.markAllAsTouched();
    }
  }
}
