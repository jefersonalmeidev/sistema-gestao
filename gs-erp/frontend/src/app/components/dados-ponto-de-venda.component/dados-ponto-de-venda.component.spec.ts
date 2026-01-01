import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPontoDeVendaComponent } from './dados-ponto-de-venda.component';

describe('DadosPontoDeVendaComponent', () => {
  let component: DadosPontoDeVendaComponent;
  let fixture: ComponentFixture<DadosPontoDeVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosPontoDeVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPontoDeVendaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
