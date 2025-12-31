import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cadastro-produtos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class FormularioProdutoComponent {
  private fb = inject(FormBuilder);
  formProduto: FormGroup;

  produto = {
    identificacao: {
      codigo: '',
      nome: '',
      descricao: '',
      imagem: ''
    },
    classificacao: {
      categoria: '',
      subcategoria: '',
      marca: '',
      modelo: ''
    },
    estoque: {
      quantidade: 0,
      unidadeMedida: '',
      estoqueMinimo: 0,
      localizacao: ''
    },
    preco: {
      custo: 0,
      venda: 0,
      margemLucro: 0,
      promocao: false
    },
    informacoesTecnicas: {
      peso: 0,
      dimensoes: '',
      cor: '',
      tamanho: '',
      material: '',
      validade: '',
      codigoBarras: ''
    },
    fornecedor: {
      nome: '',
      codigoFornecedor: ''
    },
    status: {
      ativo: true,
      condicao: 'Novo' as 'Novo' | 'Usado' | 'Recondicionado'
    }
  };

  constructor() {
    this.formProduto = this.fb.group({
      // Identificação
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: [''],
      imagem: [''],

      // Classificação
      categoria: ['', Validators.required],
      subcategoria: [''],
      marca: [''],
      modelo: [''],

      // Estoque
      quantidade: [0, Validators.required],
      unidadeMedida: ['', Validators.required],
      estoqueMinimo: [0],
      localizacao: [''],

      // Preço
      custo: [0, Validators.required],
      venda: [0, Validators.required],
      margemLucro: [0],
      promocao: [false],

      // Informações técnicas
      peso: [0],
      dimensoes: [''],
      cor: [''],
      tamanho: [''],
      material: [''],
      validade: [''],
      codigoBarras: [''],

      // Fornecedor
      nomeFornecedor: [''],
      codigoFornecedor: [''],

      // Status
      ativo: [true],
      condicao: ['Novo']
    });
  }

  onSubmit() {
    if (this.formProduto.valid) {
      console.log('Produto:', this.formProduto.value);

      // Atualiza o objeto produto com os valores do formulário
      Object.assign(this.produto, this.formProduto.value);
    } else {
      this.formProduto.markAllAsTouched();
    }
  }
}
