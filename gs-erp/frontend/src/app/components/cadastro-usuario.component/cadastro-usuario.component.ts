import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class FormularioUsuarioComponent {
  private fb = inject(FormBuilder);
  formUsuario: FormGroup;

  usuario = {
    identificacao: {
      nomeCompleto: '',
      apelido: '',
      dataNascimento: ''
    },
    contato: {
      email: '',
      telefone: ''
    },
    seguranca: {
      senha: '',
      confirmarSenha: '',
      // opcional: autenticação 2FA
      autenticaDoisFatores: false
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
    consentimento: {
      termosUso: false,
      receberPromocoes: false
    }
  };

  constructor() {
    this.formUsuario = this.fb.group({
      // Identificação
      nomeCompleto: ['', Validators.required],
      apelido: [''],
      dataNascimento: ['', Validators.required],

      // Contato
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],

      // Segurança
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      autenticaDoisFatores: [false],

      // Endereço
      cep: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      pais: ['Brasil'],

      // Consentimento
      termosUso: [false, Validators.requiredTrue],
      receberPromocoes: [false]
    }, {
      validators: this.senhasIguais('senha', 'confirmarSenha')
    });
  }

  onSubmit() {
    if (this.formUsuario.valid) {
      console.log('Usuário:', this.formUsuario.value);
      Object.assign(this.usuario, this.formUsuario.value);
    } else {
      this.formUsuario.markAllAsTouched();
    }
  }

  // Validador customizado para conferir se as senhas são iguais
  senhasIguais(senha: string, confirmarSenha: string) {
    return (group: FormGroup) => {
      const s = group.controls[senha];
      const cs = group.controls[confirmarSenha];
      if (s.value !== cs.value) {
        cs.setErrors({ naoCoincidem: true });
      } else {
        cs.setErrors(null);
      }
    };
  }
}
