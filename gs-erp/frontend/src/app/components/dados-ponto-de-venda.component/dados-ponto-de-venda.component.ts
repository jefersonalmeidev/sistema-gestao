import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SecondaryMenuChild {
  label: string;
  route: string;
}

interface SecondaryMenuItem {
  label: string;
  route?: string;
  children?: SecondaryMenuChild[];
}

@Component({
  selector: 'dados-pdv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dados-ponto-de-venda.component.html',
  styleUrls: ['./dados-ponto-de-venda.component.css'],
})
export class DadosPontoDeVendaComponent {
  /** Controle da sidebar (para integração futura) */
  sidebarActive = false;

  /** Índice do dropdown atualmente aberto */
  openDropdown: number | null = null;

  /** Itens do menu secundário */
  secondaryMenu: SecondaryMenuItem[] = [
    {
      label: 'Visão Geral',
      route: '/pdv/visao-geral',
    },
    {
      label: 'Configurações',
      children: [
        { label: 'Geral', route: '/pdv/configuracoes' },
        { label: 'Impressão', route: '/pdv/configuracoes/impressao' },
        { label: 'Pagamentos', route: '/pdv/configuracoes/pagamentos' },
      ],
    },
    {
      label: 'Operadores',
      children: [
        { label: 'Lista de Operadores', route: '/pdv/operadores' },
        { label: 'Permissões', route: '/pdv/operadores/permissoes' },
      ],
    },
  ];

  /**
   * Abre ou fecha o dropdown clicado
   */
  toggleDropdown(index: number): void {
    this.openDropdown = this.openDropdown === index ? null : index;
  }

  /**
   * Fecha todos os dropdowns
   */
  closeDropdown(): void {
    this.openDropdown = null;
  }

  /**
   * Fecha dropdown ao clicar fora da navbar
   */
  @HostListener('document:click')
  onClickOutside(): void {
    this.closeDropdown();
  }
}
