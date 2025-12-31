import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cadastro-servico',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class FormularioServicoComponent {
  private fb = inject(FormBuilder);
  formServico: FormGroup;

  servico = {
    identificacao: {
      codigo: '',
      nome: '',
      descricao: '',
      categoria: ''
    },
    detalhes: {
      preco: 0,
      duracao: '', // pode ser em formato "1h 30min"
      disponibilidade: ''
    },
    prestador: {
      nome: '',
      telefone: '',
      email: '',
      endereco: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: 'Brasil',
        cep: ''
      }
    },
    observacoes: ''
  };

  constructor() {
    this.formServico = this.fb.group({
      // Identificação do serviço
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: ['', Validators.required],

      // Detalhes do serviço
      preco: [0, [Validators.required, Validators.min(0)]],
      duracao: ['', Validators.required],
      disponibilidade: ['', Validators.required],

      // Dados do prestador
      nomePrestador: ['', Validators.required],
      telefonePrestador: [''],
      emailPrestador: ['', [Validators.required, Validators.email]],

      // Endereço do prestador
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: [''],
      cidade: ['', Validators.required],
      estado: [''],
      pais: ['Brasil'],
      cep: ['', Validators.required],

      // Observações adicionais
      observacoes: ['']
    });
  }

  onSubmit() {
    if (this.formServico.valid) {
      console.log('Serviço:', this.formServico.value);

      // Atualiza o objeto serviço com os valores do formulário
      Object.assign(this.servico, this.formServico.value);
    } else {
      this.formServico.markAllAsTouched();
    }
  }
}
