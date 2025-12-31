import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-cad-fornecedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.css']
})
export class FormularioFornecedorComponent {
  private fb = inject(FormBuilder);

  formFornecedor: FormGroup;

  constructor() {
    this.formFornecedor = this.fb.group({
      identificacao: this.fb.group({
        codigo: ['', Validators.required],
        razaoSocial: ['', Validators.required],
        tipoFornecedor: ['', Validators.required], // Produto / Serviço / Ambos
        cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]]
      }),
      contato: this.fb.group({
        emailPrincipal: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required]
      }),
      endereco: this.fb.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        pais: ['Brasil']
      }),
      bancario: this.fb.group({
        banco: [''],
        agencia: [''],
        conta: [''],
        tipoConta: ['Corrente']
      })
    });
  }

  onSubmit() {
    if (this.formFornecedor.valid) {
      console.log('Fornecedor:', this.formFornecedor.value);
      // Enviar dados para API ou atualizar estado
    } else {
      this.formFornecedor.markAllAsTouched();
    }
  }
}
