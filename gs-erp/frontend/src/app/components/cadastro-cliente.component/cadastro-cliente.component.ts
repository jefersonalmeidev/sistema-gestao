import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-cad-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class FormularioClienteComponent {
  private fb = inject(FormBuilder);
  formCliente: FormGroup;

  cliente = {
    identificacao: {
      codigo: '',
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      cpf: ''
    },
    contato: {
      telefone: '',
      celular: '',
      email: '',
      receberPromocoes:''
    },
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: 'Brasil'
    },
    preferencias: {
      aceitoTermos:'',
      contatoPreferencial: 'Email' as 'Email' | 'Telefone' | 'WhatsApp',
      observacoes: ''
    }
  };

  constructor() {
    this.formCliente = this.fb.group({
      // Identificação
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]],

      // Contato
      telefone: [''],
      celular: [''],
      email: ['', [Validators.required, Validators.email]],
      receberPromocoes:[''],

      // Endereço
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: [''],
      cidade: ['', Validators.required],
      estado: [''],
      pais: ['Brasil'],

      // Preferências
      contatoPreferencial: ['Email', Validators.required],
      aceitoTermos:[''],
      observacoes: ['']
    });
  }

  onSubmit() {
    if (this.formCliente.valid) {
      console.log('Cliente:', this.formCliente.value);

      // Atualiza o objeto cliente com os valores do formulário
      Object.assign(this.cliente, this.formCliente.value);
    } else {
      this.formCliente.markAllAsTouched();
    }
  }
}
