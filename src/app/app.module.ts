import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BaseComponent } from './components/base/components/base.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';

// Listagem
import { AtorComponent } from './components/listagem/ator/ator.component';
import { ClasseComponent } from './components/listagem/classe/classe.component';
import { DiretorComponent } from './components/listagem/diretor/diretor.component';
import { TabelaComponent } from './components/listagem/tabela/tabela.component';
import { ItemComponent } from './components/listagem/item/item.component';
import { TituloComponent } from './components/listagem/titulo/titulo.component';
import { ClienteComponent } from './components/listagem/cliente/cliente.component';

// Cadastro
import { CadastroAtorComponent } from './components/cadastro/cadastro-ator/cadastro-ator.component';
import { CadastroDiretorComponent } from './components/cadastro/cadastro-diretor/cadastro-diretor.component';
import { CadastroClasseComponent } from './components/cadastro/cadastro-classe/cadastro-classe.component';
import { CadastroItemComponent } from './components/cadastro/cadastro-item/cadastro-item.component';
import { CadastroTituloComponent } from './components/cadastro/cadastro-titulo/cadastro-titulo.component';
import { CadastroDependenteComponent } from './components/cadastro/cadastro-dependente/cadastro-dependente.component';
import { CadastroClienteComponent } from './components/cadastro/cadastro-cliente/cadastro-cliente.component';


//Services
import { AtorService } from './service/atorService';
import { ClasseService } from './service/classeService';
import { DiretorService } from './service/diretorService';
import { ItemService } from './service/itemService';
import { TituloService } from './service/tituloService';
import { ClienteService } from './service/clienteService';
import { DependenteService } from './service/dependenteService';
import { EfetuarLocacaoComponent } from './components/cadastro/efetuar-locacao/efetuar-locacao.component';
import { EfetuarDevolucaoComponent } from './components/cadastro/efetuar-devolucao/efetuar-devolucao.component';
import { LocacaoService } from './service/locacaoService';
import { DevolucaoService } from './service/devolucaoService';


const routes : Routes = [
  {path: 'cadastro-ator', component: CadastroAtorComponent },
  {path: 'cadastro-dependente', component: CadastroDependenteComponent },
  {path: 'cadastro-classe', component: CadastroClasseComponent },
  {path: 'cadastro-diretor', component: CadastroDiretorComponent },
  {path: 'cadastro-item', component: CadastroItemComponent },
  {path: 'cadastro-titulo', component: CadastroTituloComponent },
  {path: 'cadastro-cliente', component: CadastroClienteComponent },
  {path: 'atores/:id', component: AtorComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'classes/:id', component: ClasseComponent},
  {path: 'efetuar-locacao', component: EfetuarLocacaoComponent},
  {path: 'efetuar-devolucao', component: EfetuarDevolucaoComponent},

  {path: 'diretores/:id', component: DiretorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'home', component: HomeComponent},
  { path: 'tabela', component: TabelaComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},


];


@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    BaseComponent,
    TabelaComponent,
    ItemComponent,
    TituloComponent,
    HomeComponent,
    SearchComponent,
    ClienteComponent,

    CadastroAtorComponent,
    CadastroDiretorComponent,
    CadastroClasseComponent,
    CadastroItemComponent,
    CadastroTituloComponent,
    CadastroClienteComponent,
    CadastroDependenteComponent,
    EfetuarLocacaoComponent,
    EfetuarDevolucaoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [AtorService,
              ClasseService,
              DiretorService,
              DependenteService,
              ItemService,
              TituloService,
              ClienteService,
              LocacaoService,
              DevolucaoService,
              HomeComponent,
  ],
  bootstrap: [AppComponent]
})



export class AppModule {


}
