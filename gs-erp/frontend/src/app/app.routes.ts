import { Routes } from '@angular/router';
import { FormularioComponent } from './components/cadastro-empresa.component/cadastro-empresa.component';
import { FormularioClienteComponent } from './components/cadastro-cliente.component/cadastro-cliente.component';
import { FormularioFornecedorComponent } from './components/cadastro-fornecedor.component/cadastro-fornecedor.component';
import { FormularioProdutoComponent } from './components/cadastro-produto.component/cadastro-produto.component';
import { LoginComponent } from './auth/login.component/login.component';
import { FormularioServicoComponent } from './components/cadastro-servico.component/cadastro-servico.component';
import { FormularioUsuarioComponent } from './components/cadastro-usuario.component/cadastro-usuario.component';

export const routes: Routes = [
    { path:'app-login', component: LoginComponent},
    { path:'cadastro-empresa', component: FormularioComponent },
    { path:'cadastro-cliente', component: FormularioClienteComponent },
    { path:'cadastro-fornecedor', component: FormularioFornecedorComponent },
    { path:'cadastro-produtos', component: FormularioProdutoComponent },
    { path:'cadastro-servico', component: FormularioServicoComponent },
    { path:'cadastro-usuario', component: FormularioUsuarioComponent }
];
